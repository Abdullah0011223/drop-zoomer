import { FaReply } from "react-icons/fa";

export default function Comment() {
  return (
    <div className="border rounded-lg p-6 shadow-md flex items-start space-x-6">
      {/* User Image */}
      <div className="relative">
        <img
          src="/images/instr1.png"
          alt="User"
          className="w-50 h-20 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full shadow-lg cursor-pointer">
          <FaReply size={16} />
        </div>
      </div>

      {/* Comment Content */}
      <div>
        <h3 className="font-bold text-lg">Mr Smith</h3>
        <p className="text-gray-500 text-sm">13 Jan, 2024</p>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem.
        </p>
      </div>
    </div>
  );
}
