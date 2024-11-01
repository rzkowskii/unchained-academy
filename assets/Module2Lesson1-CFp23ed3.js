import{j as e}from"./index-B0IARw92.js";import{L as s}from"./LessonContent-8j15sELS.js";const i={title:"Hardware and Software Requirements",duration:25,objectives:["Understand the different types of nodes in the Unchained Network","Learn about hardware requirements for each node type","Explore software compatibility and dependencies","Understand scalability considerations for node operation"]},a=()=>e.jsxs(s,{metadata:i,children:[e.jsxs("section",{id:"introduction",className:"mb-12",children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"In this lesson, we'll cover the hardware and software requirements for running an Unchained Network node. Before setting up your node, it's essential to understand the specifications and resources needed for optimal performance."})]}),e.jsxs("section",{id:"node-types",className:"mb-12",children:[e.jsx("h2",{children:"1. Overview of Node Types and Their Requirements"}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h3",{children:"Worker Nodes"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function:"})," Responsible for processing and validating data within the network."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"Hardware Requirements:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Storage: Minimum 10 GB, with more recommended for higher loads"}),e.jsx("li",{children:"Memory: 128 MB for simple operations, 16 GB for AI-intensive tasks"}),e.jsx("li",{children:"CPU: At least 1 CPU core (AArch64 or AMD64 architecture)"}),e.jsx("li",{children:"Network: 1 Mbps symmetric internet speed"})]})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h3",{children:"Broker Nodes"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function:"})," Serve as intermediaries between worker and consumer nodes, routing data requests."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"Hardware Requirements:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Storage: Minimum 10 GB"}),e.jsx("li",{children:"Memory: 256 MB"}),e.jsx("li",{children:"CPU: At least 1 CPU core (AArch64 or AMD64)"}),e.jsx("li",{children:"Network: 100 Mbps symmetric internet speed"})]})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h3",{children:"Consumer Nodes"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function:"})," Access and retrieve data from the network, primarily used by data consumers."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{children:"Hardware Requirements:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Storage: Minimum 1 TB SSD"}),e.jsx("li",{children:"Memory: 16 GB for efficient data handling"}),e.jsx("li",{children:"CPU: 8 CPU cores recommended"}),e.jsx("li",{children:"Network: 100 Mbps symmetric internet speed"})]})]})]})]}),e.jsxs("section",{id:"ai-requirements",className:"mb-12",children:[e.jsx("h2",{children:"2. Hardware Specifications for Running AI-Powered Worker Nodes"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Additional Requirements for AI Tasks"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"GPU: NVIDIA, Vulkan, or Apple M-series with at least 24 GB VRAM"}),e.jsx("li",{children:"Increased Storage: Recommended 100 GB"}),e.jsx("li",{children:"Enhanced CPU: 8 cores for AI data processing"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Optimal Setup for Performance"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"High-speed SSD with ample VRAM and RAM"}),e.jsx("li",{children:"Regular upgrades to storage and memory"})]})]})]})]}),e.jsxs("section",{id:"software-compatibility",className:"mb-12",children:[e.jsx("h2",{children:"3. Software Compatibility and Installation Needs"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Operating Systems"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Linux: Kernel v5.15+ with systemd support"}),e.jsx("li",{children:"macOS: Version 12+ on Apple hardware"}),e.jsx("li",{children:"Windows: Windows 10 (Vibranium) and above"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Dependencies"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"BLS12-381 Pairing Implementation"}),e.jsx("li",{children:"mkcert for SSL certificates"}),e.jsx("li",{children:"pyenv and Python 3.8.19"})]})]})]})]}),e.jsxs("section",{id:"scalability",className:"mb-12",children:[e.jsx("h2",{children:"4. Hardware Considerations for Scalability"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-3",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Storage Expansion"}),e.jsx("p",{children:"Consider modular storage solutions and high-capacity SSDs for larger datasets"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Memory Management"}),e.jsx("p",{children:"Over-provision memory for worker nodes handling AI tasks"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Redundant Systems"}),e.jsx("p",{children:"Implement backup solutions and UPS for power outages"})]})]})]}),e.jsxs("section",{id:"knowledge-check",className:"mb-12",children:[e.jsx("h2",{children:"Knowledge Check"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Question 1"}),e.jsx("p",{className:"mb-4",children:"Which type of node requires at least 1 TB of SSD storage?"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"q1",value:"a"}),e.jsx("span",{children:"A) Worker Node"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"q1",value:"b"}),e.jsx("span",{children:"B) Broker Node"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"q1",value:"c"}),e.jsx("span",{children:"C) Consumer Node"})]})]})]})})]}),e.jsxs("section",{id:"summary",className:"mb-12",children:[e.jsx("h2",{children:"Summary"}),e.jsxs("div",{className:"bg-surface-dark p-6 rounded-lg",children:[e.jsx("p",{className:"mb-4",children:"In this lesson, we covered:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Different types of nodes and their specific requirements"}),e.jsx("li",{children:"Additional hardware needs for AI-powered nodes"}),e.jsx("li",{children:"Software compatibility and dependencies"}),e.jsx("li",{children:"Considerations for scaling node operations"})]})]})]})]});export{a as default};