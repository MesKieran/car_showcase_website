'use client'
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from "."
import { updateSearchPrams } from "@/utils"

const Showless = ({ pageNumber, isNext }:ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation= () => {
        const newLimit = (pageNumber - 1)*10
        if (newLimit >= 9){
          const newPathName = updateSearchPrams("limit", `${newLimit}`)
          router.push(newPathName)
        }
    }
    return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
            title="Show Less"
            btnType="button"
            containerStyles="bg-grey rounded-full text-white"
            handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default Showless
    