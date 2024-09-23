import yes from "../../../assets/svg/yes.svg";
import no from "../../../assets/svg/no.svg";

const DelayCard = ({ title, status, progress, images, actions, reason }) => {
  return (
    <div className="border border-red-400 rounded-xl p-4 space-y-2 bg-red-50">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-black">{title}</h3>
        </div>

        <span className="text-red-400 text-xs">{status}</span>
      </div>
      <p className="text-sm text-gray-500">Charan Project</p>
      <p className="text-xs text-gray-400">25 May 2024 - 26 May 2024</p>

      {reason && <p className="text-xs text-black">Reason: {reason}</p>}

      <div className="flex space-x-2 mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Task"
            className="h-10 w-10 rounded-md"
          />
        ))}
      </div>

      <div className="flex justify-between space-x-5 mt-2">
        <div className="flex space-x-2">
          {actions
            .filter(
              (action) => action.type === "approve" || action.type === "reject"
            )
            .map((action, index) => (
              <button
                key={index}
                className={`flex items-center px-1 py-2 bg-red-50 outline-none focus:outline-none border-none ring-0 text-sm ${
                  action.type === "approve"
                    ? "text-green-400"
                    : action.type === "reject"
                    ? "text-red-400"
                    : ""
                }`}
              >
                {action.type === "approve" && (
                  <img src={yes} alt="Yes" className="h-3 w-3 mr-1" />
                )}
                {action.type === "reject" && (
                  <img src={no} alt="No" className="h-3 w-3 mr-1" />
                )}
                {action.label}
              </button>
            ))}
        </div>

        <div>
          {actions
            .filter((action) => action.type === "complete")
            .map((action, index) => (
              <button
                key={index}
                className="px-5 py-2 bg-primary text-white rounded-xl outline-none focus:outline-none border-none ring-0"
              >
                {action.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DelayCard;
