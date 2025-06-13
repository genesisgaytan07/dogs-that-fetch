import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/icon.png" alt="Dogs that Fetch logo" className="w-60 " />
      <LoginForm />
    </div>
  );
}

export default App;
