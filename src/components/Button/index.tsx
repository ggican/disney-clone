import dynamic from "next/dynamic";

const Button = dynamic(() => import("./Button"), {
  ssr: true,
});

export default Button;
