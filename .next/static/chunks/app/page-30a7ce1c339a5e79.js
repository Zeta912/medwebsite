!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="bdbf0eb5-ec55-45dc-8486-544ae95a119a",e._sentryDebugIdIdentifier="sentry-dbid-bdbf0eb5-ec55-45dc-8486-544ae95a119a")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{39776:function(e,a,t){Promise.resolve().then(t.bind(t,46396)),Promise.resolve().then(t.bind(t,63389)),Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.t.bind(t,231,23))},63389:function(e,a,t){"use strict";t.d(a,{PasskeyModal:function(){return P}});var s=t(57437),l=t(66648),r=t(16463),n=t(2265),d=t(76669),o=t(50495),i=t(37440);let c=d.fC;d.xz;let f=d.h_,m=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(d.aV,{className:(0,i.cn)("fixed inset-0 z-50 bg-black/80 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...l,ref:a})});m.displayName=d.aV.displayName;let u=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsxs)(f,{children:[(0,s.jsx)(m,{}),(0,s.jsx)(d.VY,{ref:a,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",t),...l})]})});u.displayName=d.VY.displayName;let p=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 text-center sm:text-left",a),...t})};p.displayName="AlertDialogHeader";let x=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};x.displayName="AlertDialogFooter";let h=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(d.Dx,{ref:a,className:(0,i.cn)("text-lg font-semibold",t),...l})});h.displayName=d.Dx.displayName;let b=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(d.dk,{ref:a,className:(0,i.cn)("text-sm text-slate-500 dark:text-slate-400",t),...l})});b.displayName=d.dk.displayName;let N=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(d.aU,{ref:a,className:(0,i.cn)((0,o.d)(),t),...l})});N.displayName=d.aU.displayName,n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(d.$j,{ref:a,className:(0,i.cn)((0,o.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...l})}).displayName=d.$j.displayName;var j=t(66431),y=t(32309);let g=n.forwardRef((e,a)=>{let{className:t,containerClassName:l,...r}=e;return(0,s.jsx)(j.uZ,{ref:a,containerClassName:(0,i.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",l),className:(0,i.cn)("disabled:cursor-not-allowed",t),...r})});g.displayName="InputOTP";let v=n.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)("div",{ref:a,className:(0,i.cn)("flex items-center",t),...l})});v.displayName="InputOTPGroup";let w=n.forwardRef((e,a)=>{let{index:t,className:l,...r}=e,{char:d,hasFakeCaret:o,isActive:c}=n.useContext(j.VM).slots[t];return(0,s.jsxs)("div",{ref:a,className:(0,i.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-slate-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-slate-800",c&&"z-10 ring-2 ring-slate-950 ring-offset-white dark:ring-slate-300 dark:ring-offset-slate-950",l),...r,children:[d,o&&(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-slate-950 duration-1000 dark:bg-slate-50"})})]})});w.displayName="InputOTPSlot",n.forwardRef((e,a)=>{let{...t}=e;return(0,s.jsx)("div",{ref:a,role:"separator",...t,children:(0,s.jsx)(y.Z,{})})}).displayName="InputOTPSeparator";var k=t(20357);let P=()=>{let e=(0,r.useRouter)(),a=(0,r.usePathname)(),[t,d]=(0,n.useState)(!1),[o,f]=(0,n.useState)(""),[m,j]=(0,n.useState)(""),y=window.localStorage.getItem("accessKey");(0,n.useEffect)(()=>{let t=y&&(0,i.IM)(y);a&&(t===k.env.NEXT_PUBLIC_ADMIN_PASSKEY.toString()?(d(!1),e.push("/admin")):d(!0))},[y]);let P=()=>{d(!1),e.push("/")},I=e=>{if(e.preventDefault(),o===k.env.NEXT_PUBLIC_ADMIN_PASSKEY){let e=(0,i.Vg)(o);localStorage.setItem("accessKey",e),d(!1)}else j("Invalid passkey. Please try again.")};return(0,s.jsx)(c,{open:t,onOpenChange:d,children:(0,s.jsxs)(u,{className:"shad-alert-dialog",children:[(0,s.jsxs)(p,{children:[(0,s.jsxs)(h,{className:"flex items-start justify-between",children:["Admin Access Verification",(0,s.jsx)(l.default,{src:"/assets/icons/close.svg",alt:"close",width:20,height:20,onClick:()=>P(),className:"cursor-pointer"})]}),(0,s.jsx)(b,{children:"To access the admin page, please enter the passkey."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(g,{maxLength:6,value:o,onChange:e=>f(e),children:(0,s.jsxs)(v,{className:"shad-otp",children:[(0,s.jsx)(w,{className:"shad-otp-slot",index:0}),(0,s.jsx)(w,{className:"shad-otp-slot",index:1}),(0,s.jsx)(w,{className:"shad-otp-slot",index:2}),(0,s.jsx)(w,{className:"shad-otp-slot",index:3}),(0,s.jsx)(w,{className:"shad-otp-slot",index:4}),(0,s.jsx)(w,{className:"shad-otp-slot",index:5})]})}),m&&(0,s.jsx)("p",{className:"shad-error text-14-regular mt-4 flex justify-center",children:m})]}),(0,s.jsx)(x,{children:(0,s.jsx)(N,{onClick:e=>I(e),className:"shad-primary-btn w-full",children:"Enter Admin Passkey"})})]})})}},46396:function(e,a,t){"use strict";t.d(a,{PatientForm:function(){return u}});var s=t(57437),l=t(31014),r=t(16463),n=t(2265),d=t(39343),o=t(32653),i=t(14109),c=t(88650);t(32892);var f=t(36678),m=t(14958);let u=()=>{let e=(0,r.useRouter)(),[a,t]=(0,n.useState)(!1),u=(0,d.cI)({resolver:(0,l.F)(c.kv),defaultValues:{name:"",email:"",phone:""}}),p=async a=>{t(!0);try{let t={name:a.name,email:a.email,phone:a.phone},s=await (0,i.r4)(t);s&&e.push("/patients/".concat(s.$id,"/register"))}catch(e){console.log(e)}t(!1)};return(0,s.jsx)(o.l0,{...u,children:(0,s.jsxs)("form",{onSubmit:u.handleSubmit(p),className:"flex-1 space-y-6",children:[(0,s.jsxs)("section",{className:"mb-12 space-y-4",children:[(0,s.jsx)("h1",{className:"header",children:"Hi there \uD83D\uDC4B"}),(0,s.jsx)("p",{className:"text-dark-700",children:"Get started with appointments."})]}),(0,s.jsx)(f.Z,{fieldType:f.E.INPUT,control:u.control,name:"name",label:"Full name",placeholder:"John Doe",iconSrc:"/assets/icons/user.svg",iconAlt:"user"}),(0,s.jsx)(f.Z,{fieldType:f.E.INPUT,control:u.control,name:"email",label:"Email",placeholder:"johndoe@gmail.com",iconSrc:"/assets/icons/email.svg",iconAlt:"email"}),(0,s.jsx)(f.Z,{fieldType:f.E.PHONE_INPUT,control:u.control,name:"phone",label:"Phone number",placeholder:"(555) 123-4567"}),(0,s.jsx)(m.Z,{isLoading:a,children:"Get Started"})]})})}},14109:function(e,a,t){"use strict";t.d(a,{B3:function(){return r},r4:function(){return l}}),t(74590);var s=t(58064);(0,s.$)("9b4fd13b3ae1c497aaa39d83de836764dbcf0047");var l=(0,s.$)("95f0c52949cdab195dfe4a1bfb7ab2c8397a42ea");(0,s.$)("9ccc68e1fba2ccbb7002d0fdddc25e8f1e9825fb");var r=(0,s.$)("2c3032254826e2dcd49240605bcd3fd695dc40a4")}},function(e){e.O(0,[149,173,190,231,304,981,908,916,971,440,744],function(){return e(e.s=39776)}),_N_E=e.O()}]);