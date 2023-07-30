import { UseMemorey } from "@/store/store1";

const TestPage = () => {
  const { bears, userData, updateUser } = UseMemorey();
  console.log({ bears, userData });
  return (
    <div>
      <button
        onClick={() =>
          updateUser({
            name: "Tuhin",
            age: 18,
            mobile: "01955886644",
          })
        }
      >
        Update User
      </button>
    </div>
  );
};

export default TestPage;
