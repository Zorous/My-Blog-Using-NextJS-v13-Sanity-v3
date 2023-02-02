import Image from "next/image";
function Logo(props: any) {
    const {renderDefault, title} = props;
  return (
    <div className="flex items-center">
        <Image
        className="rounded-full object-cover"
        height={5}
        width={50}
        src="https://drive.google.com/uc?export=view&id=135irg_JPEKXmJFIchtAWBLPHkUOu4o7c"
        alt="logo"
         />
         <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo