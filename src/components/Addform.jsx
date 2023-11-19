import { useDispatch, useSelector } from "react-redux";
import { resetFormState, setFormState, updateDescription } from "../redux/slices/formslice";
import { saveFormData } from "../redux/thunks/formThunks";

const icons = ["🦋", "😍", "😎"];

const Addform = ({setShowForm}) => {

  const dispatch = useDispatch();

  const formState = useSelector(state => state.form.formState);

  const handleSubmit = () => {
    dispatch(
      setFormState({
        id: Date.now(),
        currentTime:currentTime
      })
    );

    dispatch(saveFormData())
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormState({ field: name, value }));
  };



  const handleCancel = () => {
    setShowForm(false);
    dispatch(resetFormState())
  };

  const handleDescriptionChange = (e) => {
    dispatch(updateDescription(e.target.value));
  };

  const buttonClasses =
    "bg-[#f5bd6c] text-white px-4 py-2 mt-4 rounded hover:bg-[#f0a742]";

    const today = new Date();


    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false, 
    };
    
    const currentTime = today.toLocaleTimeString(undefined, options);

  return (
    <div className="bg-[#f9fbfd] p-5 z-50">
      <span className="w-6 h-6 bg-[#f9fbfd] absolute -top-3 right-1.5 shadow-sm shadow-[#f9fbfd] rotate-45 z-40"></span>
      <div>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2">Title:</td>
              <td className="relative">
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  className="w-[calc(100%-25%)] px-2 py-1 rounded border border-gray-300"
                  placeholder="Type title..."
                />
                <span
                  className={`material-symbols-outlined absolute top-2.5 right-2  text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer`}
                  onClick={() =>
                    dispatch(setFormState({field: "title" , value: "" }))
                  }
                >
                  clear_all
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-2">icon:</td>
              <td className="relative">
                <select
                  value={formState.icon}
                  name="icon" 
                  onChange={handleChange}
                  className="w-[calc(100%-25%)] px-2 py-1 rounded border border-gray-300 bg-[#f9fbfd] text-gray-700 shadow-sm focus:outline-none cursor-pointer "
                >
                  <option value="" disabled>
                    Select an icon
                  </option>
                  {icons.map((icon) => (
                    <option
                      key={icon}
                      value={icon}
                      className={`bg-[#f9fbfd] text-gray-900 p-2 rounded hover:bg-[#f5bd6c]  `}
                    >
                      {icon}
                    </option>
                  ))}
                </select>
                <span
                  className={`material-symbols-outlined absolute top-2.5 right-2  text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer`}
                  onClick={() =>
                    dispatch(setFormState({field:"icon",value:""}))
                  }
                >
                  clear_all
                </span>
              </td>
            </tr>

            <tr>
              <td className="">Description:</td>
              <td className="relative overflow-x-visible">
                <textarea
                  value={formState?.description?.join("\n")}
                  onChange={handleDescriptionChange}
                  className="w-full px-2  py-1 rounded border border-gray-300 "
                  placeholder="Type description..."
                ></textarea>
                {formState?.description?.length > 0 && (
                  <span
                    className={`material-symbols-outlined absolute bottom-1 right-2  text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer`}
                    onClick={() =>
                      dispatch(setFormState({field:"description" , value:[]}))
                    }
                  >
                    clear_all
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <span className="flex gap-5">
          <button onClick={handleSubmit} className={buttonClasses}>
            {" "}
            Add Task{" "}
          </button>
          <button className={buttonClasses} onClick={handleCancel}>
            Cancel
          </button>
        </span>
      </div>
    </div>
  );
};

export default Addform;
