import { FiMonitor, FiMoreVertical, FiPhoneCall, FiSearch, FiVideo } from "react-icons/fi"
import Avatar from "./Avatar"

const ConversationHead = () => {
  return (
    <div className="flex">
      <Avatar src="/images/01.jpg" className="w-12 h-12" />
      <div>
        <button>
          <FiSearch size='20px' />
        </button>
      </div>
      <div>
        <button>
          <FiVideo size='25px' />
        </button>
        <button>
          <FiPhoneCall size='25px' />
        </button>
        <button>
          <FiMoreVertical size='25px' />
        </button>
      </div>
    </div>
  )
}

export default ConversationHead