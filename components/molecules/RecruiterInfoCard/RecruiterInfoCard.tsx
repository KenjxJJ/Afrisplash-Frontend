import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";
import ItemAward from "assets/recruiter_signup/item_award.png";
import { PencilSquareIcon } from "@heroicons/react/24/outline";


const RecruiterInfoCardPropTypes = {
    recruiterItemsDetails: PropTypes.array,
    recruiterItemsDetailsHeading: PropTypes.string,
    setRecruiterInfo: PropTypes.func
}

const RecruiterInfoCard = ({
    recruiterItemsDetails,
    recruiterItemsDetailsHeading,
    setRecruiterInfo
}: InferProps<typeof RecruiterInfoCardPropTypes>) => {
    return (
        <>
            {/* --RecruiterItemsDetails  Section-- */}
            <section className="py-4 px-5 mx-1 my-3 bg-white rounded-lg shadow-sm">
                <div className="flex place-items-center pt-2">
                    <span>
                        <Image src={ItemAward} alt="" className="inline-block" />
                    </span>
                    <h2 className="font-bold text-black text-lg ml-2">
                        {recruiterItemsDetailsHeading}
                    </h2>
                    <PencilSquareIcon width={20} height={20} className="hover:cursor-pointer inline-block mb-3 ml-auto" />
                </div>
                <div className="divide-y">
                    {recruiterItemsDetails && (
                        recruiterItemsDetails.map(({ year, company, role, description, school }) => (
                            <>
                                <div className="pt-6 text-normal">
                                    <h3 className="font-bold text-black pb-.5">{year}</h3>
                                    {(company !== undefined || school !== undefined ) && (
                                        <h4 className="font-bold text-primary_green pb-.5">{company || school }</h4>)}
                                    <h5 className="font-light pb-3">{role}</h5>
                                    <p className="font-light pb-8 leading-normal">{description}</p>
                                </div>
                            </>
                        ))
                    )}
                </div>
            </section>
        </>
    )
}



export default RecruiterInfoCard;