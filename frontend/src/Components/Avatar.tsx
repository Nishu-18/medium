export function Avatar({name,size}:{name:string|"anonymous",size?:string}){
    const displayName=name||"anonymous"
   return <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600${size=="small"?" w-4 h-4":" w-8 h-8"}`}>
    <span className={`font-extralight text-gray-300 dark:text-gray-300 ${size=="small?text-xs:text:md"}`}>{displayName[0]}a</span>
</div>
}