!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="f3f2f52b-6e52-43d0-9408-fdafdbf779c5",e._sentryDebugIdIdentifier="sentry-dbid-f3f2f52b-6e52-43d0-9408-fdafdbf779c5")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{72720:function(e,a,t){Promise.resolve().then(t.bind(t,32697)),Promise.resolve().then(t.bind(t,37429)),Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.t.bind(t,231,23))},99049:function(e,a,t){"use strict";t.d(a,{AppointmentForm:function(){return b}});var s=t(57437),n=t(31014),l=t(66648),r=t(16463),i=t(2265),d=t(39343),c=t(46294),o=t(83146);t(74590);var m=t(58064);(0,m.$)("5002ee9bf06f8b74830ca1a2538ba786e29df13e");var p=(0,m.$)("24b94d12c6d1760f36cacfb8ad963e6972fdc48d");(0,m.$)("82bd8ac2110d6fcd8456524666e78968740c3d36"),(0,m.$)("7b7506952fd6b77c69048f85701cfed171e6e91a");var u=(0,m.$)("0112ed26ec4eb5adf1766e65f2c14ef335780f9e"),f=t(88650);t(54575);var h=t(36678),g=t(14958),x=t(32653);let b=e=>{let a,{userId:t,patientId:m,type:b="create",appointment:y,setOpen:N}=e,j=(0,r.useRouter)(),[w,v]=(0,i.useState)(!1),C=(0,f.Xn)(b),k=(0,d.cI)({resolver:(0,n.F)(C),defaultValues:{primaryPhysician:y?null==y?void 0:y.primaryPhysician:"",schedule:new Date(y?null==y?void 0:y.schedule:Date.now()),reason:y?y.reason:"",note:(null==y?void 0:y.note)||"",cancellationReason:(null==y?void 0:y.cancellationReason)||""}}),P=async e=>{let a;switch(v(!0),b){case"schedule":a="scheduled";break;case"cancel":a="cancelled";break;default:a="pending"}try{if("create"===b&&m){let s={userId:t,patient:m,primaryPhysician:e.primaryPhysician,schedule:new Date(e.schedule),reason:e.reason,status:a,note:e.note},n=await p(s);n&&(k.reset(),j.push("/patients/".concat(t,"/new-appointment/success?appointmentId=").concat(n.$id)))}else{let s={userId:t,appointmentId:null==y?void 0:y.$id,appointment:{primaryPhysician:e.primaryPhysician,schedule:new Date(e.schedule),status:a,cancellationReason:e.cancellationReason},type:b};await u(s)&&(N&&N(!1),k.reset())}}catch(e){console.log(e)}v(!1)};switch(b){case"cancel":a="Cancel Appointment";break;case"schedule":a="Schedule Appointment";break;default:a="Submit Apppointment"}return(0,s.jsx)(x.l0,{...k,children:(0,s.jsxs)("form",{onSubmit:k.handleSubmit(P),className:"flex-1 space-y-6",children:["create"===b&&(0,s.jsxs)("section",{className:"mb-12 space-y-4",children:[(0,s.jsx)("h1",{className:"header",children:"New Appointment"}),(0,s.jsx)("p",{className:"text-dark-700",children:"Request a new appointment in 10 seconds."})]}),"cancel"!==b&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{fieldType:h.E.SELECT,control:k.control,name:"primaryPhysician",label:"Doctor",placeholder:"Select a doctor",children:o.VV.map((e,a)=>(0,s.jsx)(c.Ql,{value:e.name,children:(0,s.jsxs)("div",{className:"flex cursor-pointer items-center gap-2",children:[(0,s.jsx)(l.default,{src:e.image,width:32,height:32,alt:"doctor",className:"rounded-full border border-dark-500"}),(0,s.jsx)("p",{children:e.name})]})},e.name+a))}),(0,s.jsx)(h.Z,{fieldType:h.E.DATE_PICKER,control:k.control,name:"schedule",label:"Expected appointment date",showTimeSelect:!0,dateFormat:"MM/dd/yyyy  -  h:mm aa"}),(0,s.jsxs)("div",{className:"flex flex-col gap-6  ".concat("create"===b&&"xl:flex-row"),children:[(0,s.jsx)(h.Z,{fieldType:h.E.TEXTAREA,control:k.control,name:"reason",label:"Appointment reason",placeholder:"Annual montly check-up",disabled:"schedule"===b}),(0,s.jsx)(h.Z,{fieldType:h.E.TEXTAREA,control:k.control,name:"note",label:"Comments/notes",placeholder:"Prefer afternoon appointments, if possible",disabled:"schedule"===b})]})]}),"cancel"===b&&(0,s.jsx)(h.Z,{fieldType:h.E.TEXTAREA,control:k.control,name:"cancellationReason",label:"Reason for cancellation",placeholder:"Urgent meeting came up"}),(0,s.jsx)(g.Z,{isLoading:w,className:"".concat("cancel"===b?"shad-danger-btn":"shad-primary-btn"," w-full"),children:a})]})})}},37429:function(e,a,t){"use strict";t.d(a,{DataTable:function(){return b}});var s=t(57437),n=t(33514),l=t(54175),r=t(66648),i=t(16463),d=t(2265),c=t(50495),o=t(37440);let m=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,o.cn)("w-full caption-bottom text-sm",t),...n})})});m.displayName="Table";let p=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("thead",{ref:a,className:(0,o.cn)("[&_tr]:border-b",t),...n})});p.displayName="TableHeader";let u=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("tbody",{ref:a,className:(0,o.cn)("[&_tr:last-child]:border-0",t),...n})});u.displayName="TableBody",d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("tfoot",{ref:a,className:(0,o.cn)("border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",t),...n})}).displayName="TableFooter";let f=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("tr",{ref:a,className:(0,o.cn)("border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",t),...n})});f.displayName="TableRow";let h=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("th",{ref:a,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400",t),...n})});h.displayName="TableHead";let g=d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("td",{ref:a,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...n})});g.displayName="TableCell",d.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("caption",{ref:a,className:(0,o.cn)("mt-4 text-sm text-slate-500 dark:text-slate-400",t),...n})}).displayName="TableCaption";var x=t(20357);function b(e){var a;let{columns:t,data:b}=e,y=window.localStorage.getItem("accessKey");(0,d.useEffect)(()=>{(y&&(0,o.IM)(y))!==x.env.NEXT_PUBLIC_ADMIN_PASSKEY.toString()&&(0,i.redirect)("/")},[y]);let N=(0,n.b7)({data:b,columns:t,getCoreRowModel:(0,l.sC)(),getPaginationRowModel:(0,l.G_)()});return(0,s.jsxs)("div",{className:"data-table",children:[(0,s.jsxs)(m,{className:"shad-table",children:[(0,s.jsx)(p,{className:" bg-dark-200",children:N.getHeaderGroups().map(e=>(0,s.jsx)(f,{className:"shad-table-row-header",children:e.headers.map(e=>(0,s.jsx)(h,{children:e.isPlaceholder?null:(0,n.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(u,{children:(null===(a=N.getRowModel().rows)||void 0===a?void 0:a.length)?N.getRowModel().rows.map(e=>(0,s.jsx)(f,{"data-state":e.getIsSelected()&&"selected",className:"shad-table-row",children:e.getVisibleCells().map(e=>(0,s.jsx)(g,{children:(0,n.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(f,{children:(0,s.jsx)(g,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]}),(0,s.jsxs)("div",{className:"table-actions",children:[(0,s.jsx)(c.z,{variant:"outline",size:"sm",onClick:()=>N.previousPage(),disabled:!N.getCanPreviousPage(),className:"shad-gray-btn",children:(0,s.jsx)(r.default,{src:"/assets/icons/arrow.svg",width:24,height:24,alt:"arrow"})}),(0,s.jsx)(c.z,{variant:"outline",size:"sm",onClick:()=>N.nextPage(),disabled:!N.getCanNextPage(),className:"shad-gray-btn",children:(0,s.jsx)(r.default,{src:"/assets/icons/arrow.svg",width:24,height:24,alt:"arrow ",className:"rotate-180"})})]})]})}},32697:function(e,a,t){"use strict";t.d(a,{columns:function(){return v}});var s=t(57437),n=t(66648),l=t(83146),r=t(37440),i=t(2265),d=t(50495),c=t(13304),o=t(74697);let m=c.fC,p=c.xz,u=c.h_;c.x8;let f=i.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(c.aV,{ref:a,className:(0,r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...n})});f.displayName=c.aV.displayName;let h=i.forwardRef((e,a)=>{let{className:t,children:n,...l}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(c.VY,{ref:a,className:(0,r.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",t),...l,children:[n,(0,s.jsxs)(c.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[(0,s.jsx)(o.Z,{className:"size-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=c.VY.displayName;let g=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,r.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};g.displayName="DialogHeader";let x=i.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(c.Dx,{ref:a,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",t),...n})});x.displayName=c.Dx.displayName;let b=i.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(c.dk,{ref:a,className:(0,r.cn)("text-sm text-slate-500 dark:text-slate-400",t),...n})});b.displayName=c.dk.displayName;var y=t(99049);t(54575);let N=e=>{let{patientId:a,userId:t,appointment:n,type:l}=e,[r,c]=(0,i.useState)(!1);return(0,s.jsxs)(m,{open:r,onOpenChange:c,children:[(0,s.jsx)(p,{asChild:!0,children:(0,s.jsx)(d.z,{variant:"ghost",className:"capitalize ".concat("schedule"===l&&"text-green-500"),children:l})}),(0,s.jsxs)(h,{className:"shad-dialog sm:max-w-md",children:[(0,s.jsxs)(g,{className:"mb-4 space-y-3",children:[(0,s.jsxs)(x,{className:"capitalize",children:[l," Appointment"]}),(0,s.jsxs)(b,{children:["Please fill in the following details to ",l," appointment"]})]}),(0,s.jsx)(y.AppointmentForm,{userId:t,patientId:a,type:l,appointment:n,setOpen:c})]})]})};var j=t(44839);let w=e=>{let{status:a}=e;return(0,s.jsxs)("div",{className:(0,j.Z)("status-badge",{"bg-green-600":"scheduled"===a,"bg-blue-600":"pending"===a,"bg-red-600":"cancelled"===a}),children:[(0,s.jsx)(n.default,{src:l.Jj[a],alt:"doctor",width:24,height:24,className:"h-fit w-3"}),(0,s.jsx)("p",{className:(0,j.Z)("text-12-semibold capitalize",{"text-green-500":"scheduled"===a,"text-blue-500":"pending"===a,"text-red-500":"cancelled"===a}),children:a})]})},v=[{header:"#",cell:e=>{let{row:a}=e;return(0,s.jsx)("p",{className:"text-14-medium ",children:a.index+1})}},{accessorKey:"patient",header:"Patient",cell:e=>{let{row:a}=e,t=a.original;return(0,s.jsx)("p",{className:"text-14-medium ",children:t.patient.name})}},{accessorKey:"status",header:"Status",cell:e=>{let{row:a}=e,t=a.original;return(0,s.jsx)("div",{className:"min-w-[115px]",children:(0,s.jsx)(w,{status:t.status})})}},{accessorKey:"schedule",header:"Appointment",cell:e=>{let{row:a}=e,t=a.original;return(0,s.jsx)("p",{className:"text-14-regular min-w-[100px]",children:(0,r.o0)(t.schedule).dateTime})}},{accessorKey:"primaryPhysician",header:"Doctor",cell:e=>{let{row:a}=e,t=a.original,r=l.VV.find(e=>e.name===t.primaryPhysician);return(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(n.default,{src:null==r?void 0:r.image,alt:"doctor",width:100,height:100,className:"size-8"}),(0,s.jsxs)("p",{className:"whitespace-nowrap",children:["Dr. ",null==r?void 0:r.name]})]})}},{id:"actions",header:()=>(0,s.jsx)("div",{className:"pl-4",children:"Actions"}),cell:e=>{let{row:a}=e,t=a.original;return(0,s.jsxs)("div",{className:"flex gap-1",children:[(0,s.jsx)(N,{patientId:t.patient.$id,userId:t.userId,appointment:t,type:"schedule",title:"Schedule Appointment",description:"Please confirm the following details to schedule."}),(0,s.jsx)(N,{patientId:t.patient.$id,userId:t.userId,appointment:t,type:"cancel",title:"Cancel Appointment",description:"Are you sure you want to cancel your appointment?"})]})}}]},83146:function(e,a,t){"use strict";t.d(a,{Hg:function(){return n},Jj:function(){return i},VV:function(){return r},pc:function(){return l},zC:function(){return s}});let s=["Male","Female","Other"],n={firstName:"",lastName:"",email:"",phone:"",birthDate:new Date(Date.now()),gender:"Male",address:"",occupation:"",emergencyContactName:"",emergencyContactNumber:"",primaryPhysician:"",insuranceProvider:"",insurancePolicyNumber:"",allergies:"",currentMedication:"",familyMedicalHistory:"",pastMedicalHistory:"",identificationType:"Birth Certificate",identificationNumber:"",identificationDocument:[],treatmentConsent:!1,disclosureConsent:!1,privacyConsent:!1},l=["Birth Certificate","Driver's License","Medical Insurance Card/Policy","Military ID Card","National Identity Card","Passport","Resident Alien Card (Green Card)","Social Security Card","State ID Card","Student ID Card","Voter ID Card"],r=[{image:"/assets/images/dr-green.png",name:"John Green"},{image:"/assets/images/dr-cameron.png",name:"Leila Cameron"},{image:"/assets/images/dr-livingston.png",name:"David Livingston"},{image:"/assets/images/dr-peter.png",name:"Evan Peter"},{image:"/assets/images/dr-powell.png",name:"Jane Powell"},{image:"/assets/images/dr-remirez.png",name:"Alex Ramirez"},{image:"/assets/images/dr-lee.png",name:"Jasmine Lee"},{image:"/assets/images/dr-cruz.png",name:"Alyana Cruz"},{image:"/assets/images/dr-sharma.png",name:"Hardik Sharma"}],i={scheduled:"/assets/icons/check.svg",pending:"/assets/icons/pending.svg",cancelled:"/assets/icons/cancelled.svg"}}},function(e){e.O(0,[149,173,190,231,304,33,908,916,971,440,744],function(){return e(e.s=72720)}),_N_E=e.O()}]);