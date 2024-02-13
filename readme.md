test
to run a react project using npx just run npx createreact app
to run a react project using vite run npm create vite@latest and then run npm i


Foundation Javascript, async nature of JS
Node.js and its runtime=
Databases (NoSQL/SQL)
Mongo and Postgres deep dive
Typescript beginner to advance
Backend
Backend communication protocols
Express basic to advance
ORMs
Middlewares, routes, status codes, global catches
Zod
MonoRepos, turborepo
Serverless Backends
OpenAPI Spec
Autogenerated clients
Authentication using external libraries
Scaling Node.js, performance benchmarks
Deploying npm packages
 

Frontend

Reconcilers and Frontend frameworks
React beginner to advance
Internals of state, Context API
State management using recoil
CSS you need to know of, Flexbox, basic styling
Frontend UI frameworks, Deep dive into Tailwind
Containerization, Docker
Next.js
Custom hooks
In house auth using next auth
 

Basic Devops

Docker end to end
Deploying to AWS servers
Newer clouds like fly/Remix
Nginx and reverse proxies
 

Projects

GSoC Project setting up and issue solving
Building Paytm/Wallet End to End









interface User{
  name:string;
  email:string;
  id:string;
  address :string;
  branch:string;
  section:string;
  
}
interface User1{
  name:string;
  email:string;
  id:string;
  address :string;
  branch:string;
  section:string;
  phone_no:number;
}
class user{
  name:string;
  email:string;
  id:string;
  address :string;
  branch:string;
  section:string;
  phone_no:number;

 constructor( name:string,email:string,id:string,address :string,branch:string,section:string,phone_no:number){
  this.name=name;
  this.email=email;
  this.id=id;
  this.address=address;
  this.branch=branch;
  this.section=section;
  this.phone_no=phone_no;
}

}
const rajesh = new user("Rajesh singh","rajeshsingh@gmail.com","B190002","rajiv chawk ,Delhi","Civil","E",8997994454)


function userDetails(userd:User1):void{
  console.log(userd.address)
  console.log(userd.branch)
  console.log(userd.email)
  console.log(userd.id)
  console.log(userd.name)
  console.log(userd.section)
  console.log(userd.phone_no)
}
userDetails(rajesh)
// ---cut---



















reconciliation :
In React, reconciliation refers to the process of updating the virtual DOM (Document Object Model) to reflect changes in the underlying state or props of a component. When a component's state or props change, React goes through a process called reconciliation to efficiently update the DOM and keep it in sync with the virtual DOM.

fiber:
React Fiber is a set of internal algorithms and data structures in React that form a new reconciliation algorithm. In simpler terms, it's a reimplementation of React's core algorithm for updating the user interface (UI). It was introduced in React 16 to address certain limitations of the original reconciliation algorithm and to pave the way for new features and improvements.





















