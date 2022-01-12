import Link from "next/link";

export default function Home() {
  return (
   <div>
     <header className="flex justify-between bg-gray-100 shadow-2xl p-4">
       <h1 className="text-2xl font-extrabold">DevOnly</h1>
       <div className="space-x-3">
         <Link href="/login" ><a className="rounded-md text-white font-medium px-4 py-2 bg-gray-900">Login</a></Link>
         <Link href="/signup" ><a className="rounded-md text-white font-medium px-4 py-2 bg-cyan-600">Signup</a></Link>
       </div>
     </header>
   </div>
  )
}
