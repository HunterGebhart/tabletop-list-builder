import Image from "next/image";
import { Login_Form } from "@/components/login_form";

export default function Login() {
  return (
      <div>
        <h1 className="w-screen text-center">Login</h1>
        <Login_Form/>
      </div>
  );
}