import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <Paw className="w-24 h-24 text-purple-600 mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Paw Prints</h1>
      <p className="text-xl text-gray-600">Discover the world of adorable pets!</p>
    </div>
  );
};

export default Index;
