import { NextPage } from "next";
import AdminLayout from "layouts/adminLayout";
import { useState } from "react";
import Image from "next/image";
import RecruiterPic from "assets/recruiter_signup/recruiter.png";
import { BuildingOfficeIcon, BriefcaseIcon, PencilSquareIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import RecruiterInfoCard from "components/molecules/RecruiterInfoCard/RecruiterInfoCard";
import ProgressBarComponent from "components/atoms/ProgressBar/ProgressBar";
import { ToggleButtonComponent } from "components/atoms/ToggleButton/ToggleButton";
import { RecruiterInfoData } from "utils/fakeData";


interface Recruiter {
    name: string,
    role: string,
    company: string,
    bio: string,
    isActivelyHiring: boolean,
    contact: Contact,
    desiredSkills: Array<string>,
    languages: Array<Languages>,
    experience: Array<object>,
    education: Array<object>
}

interface Contact {
    email: string,
    phone: string,
    location: string,
    shouldMakePrivate: boolean
}

interface Languages {
    item: string,
    proficiency : string
}

interface recruiterLink {
    link: string,
    isSelected: boolean
}

const recruiterLinks = [
    {
        link: "profile",
        isSelected: false
    },
    {
        link: "company",
        isSelected: false
    }
]

const RecruiterProfile: NextPage = () => {
    const [recruiterInfo, setRecruiterInfo] = useState<Recruiter>(RecruiterInfoData);
    const [showExraInfo, setShowExraInfo] = useState<boolean>(false);
    const [selectedLink, setSelectedLink] = useState<recruiterLink>({ link: "", isSelected: false });
   
    const { name, role, company, isActivelyHiring, languages, experience, education, desiredSkills, contact, bio } = recruiterInfo;
    const [progressLevel, setProgressLevel] = useState<number>(6);

    const handleSelectedLink = (link: string, isSelected: boolean) => {
        setSelectedLink({ link, isSelected: !isSelected })
    }
    const handleShowExtraInfo = () => setShowExraInfo(!showExraInfo);
    const handleCloseExtraInfo = () => setShowExraInfo(false);

    return (
        <>
            <AdminLayout>
                <div>
                    <div className="grid grid-flow-col grid-cols-2 md:grid-cols-3 col-span-full p-0 mb-4 mt-2 border-b 
                    font-bold text-base focus:opacity-95 text-slate-500">
                        {recruiterLinks && (
                            recruiterLinks.map(({ isSelected, link }) => (
                                <>
                                    <span className="h-auto" key={link}>
                                        <a href={link} className="block px-2 mr-14 mb-2 hover:text-primary_green 
                                      hover:cursor-pointer focus-visible:text-primary_green selected:text-primary_green"
                                            onClick={() => handleSelectedLink(link, isSelected)}
                                            style={{
                                                color: selectedLink.isSelected && selectedLink.link === link
                                                    ? "rgba(13,85,32,1)" : ""
                                            }}
                                        >My {link}</a>
                                        <span className={selectedLink.isSelected && selectedLink.link === link ?
                                            "z-20 w-40 block border-b-4 border-primary_green rounded-xl" : "block h-1"}></span>
                                    </span>
                                </>
                            )))}
                    </div>

                    {/* Bio */}
                    {recruiterInfo && (
                        <>
                            <div className="grid text-gray-500 gap-4 grid-cols-1 pb-8 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-0 max-w-7xl mx-0">
                                <section className="divide-y py-4 px-2 mx-1 my-3 bg-white rounded-lg shadow-sm">
                                    {/* Intro */}
                                    <div className="grid grid-cols-1 pb-6 px-4">
                                        <PencilSquareIcon width={20} height={20}
                                            className="hover:cursor-pointer block col-span-full mb-1 justify-self-end" />
                                        <section className="grid grid-cols-3 place-items-start gap-1">
                                            <span className="relative flex justify-center max-w-[100px]">
                                                <CheckBadgeIcon width={22} height={22}
                                                    className="absolute rounded-full right-0 top-2 bg-white text-yellow-400 z-20" />
                                                <Image src={RecruiterPic} className="block rounded-full -z-3" />
                                            </span>
                                            <span className="col-span-2 font-light lg:ml-0 md:-ml-1">
                                                <p className="text-lg font-bold pb-1 text-black">{name} </p>
                                                <p className="text-sm pb-1">
                                                    <BuildingOfficeIcon height={22} width={22} className="inline-block mr-2 bg-green-200 
                                                        text-primary_green rounded-md p-0.5" /> {company} </p>
                                                <p className="capitalize text-sm">
                                                    <BriefcaseIcon height={20} width={20} className="inline-block mr-2 bg-green-200
                                                        text-primary_green rounded-md p-0.5" /> {role} </p>
                                            </span>
                                        </section>
                                    </div>

                                    {/* Hiring Section */}
                                    <div className="flex justify-between p-6 font-light">
                                        <span className="font-normal text-base">Actively hiring</span>
                                        <ToggleButtonComponent section={"hiring"} />
                                    </div>

                                    {/* Bio */}
                                    <div className="py-6 px-4">
                                        <h3 className="font-bold text-base mb-3 text-black">Bio</h3>
                                        <p className="font-light text-normal leading-normal mb-6"> {bio} </p>
                                    </div>

                                    {/* Contact */}
                                    <div className="py-6 px-4 text-normal">
                                        <h3 className="flex justify-between font-bold mb-2 text-black">
                                            <span>Contact </span>
                                            <PencilSquareIcon width={20} height={20}
                                                className="hover:cursor-pointer inline-block mb-1" />
                                        </h3>
                                        <p className="py-1">
                                            <span className="font-bold">Email</span>: <span>{contact?.email} </span>
                                        </p>
                                        <p className="py-1">
                                            <span className="font-bold">Phone</span>: <span>{contact?.phone} </span>
                                        </p>
                                        <p className="py-1">
                                            <span className="font-bold">Location</span>: <span>{contact?.location} </span>
                                        </p>
                                        <p className="relative py-1 flex justify-between ">
                                            {showExraInfo && (
                                                <>
                                                    <div className="hover:cursor-pointer absolute top-67 
                                                    max-w-[250px] z-54 absolute bottom-2/3 mb-3 p-4 text-xs text-normal bg-green-500 leading-normal font-light shadow-md" onClick={() => handleCloseExtraInfo()}>
                                                    </div>
                                                    <span className="max-w-[250px] z-45 absolute bottom-2/3 mb-3 p-4 text-xs text-normal bg-white leading-normal font-light shadow-md">
                                                        <h4 className="font-bold text-sm pb-2">Private mode</h4>
                                                        <p>Private mode will hide your contact details so that the candidates can't
                                                            reach you until you turn it off</p>
                                                    </span>
                                                </>)
                                            }
                                            <span className="flex place-items-center font-bold">Private Mode
                                                <InformationCircleIcon width={18} height={18}
                                                    onClick={() => handleShowExtraInfo()}
                                                    className="hover:cursor-pointer inline-block mx-1"
                                                />
                                            </span>
                                            <ToggleButtonComponent section={"private"} />
                                        </p>
                                    </div>

                                    {/* Skills hired */}
                                    <div className="py-7 px-4 text-normal">
                                        <h3 className="flex justify-between font-bold mb-2 text-black">
                                            <span>Skills hiring for</span>
                                            <PencilSquareIcon width={20} height={20}
                                                className="hover:cursor-pointer inline-block mb-1" />
                                        </h3>
                                        <div className="pt-1 pb-2 -ml-2">
                                            {desiredSkills.map((skill) => (
                                                <span className="inline-block rounded-2xl border px-3 py-1.5 m-1 text-sm">{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    <div className="py-6 px-4 text-normal">
                                        <h3 className="flex justify-between font-bold mb-2 text-black">
                                            <span>Languages</span>
                                            <PencilSquareIcon width={20} height={20}
                                                className="hover:cursor-pointer inline-block mb-1" />
                                        </h3>
                                        <div className="capitalize pt-2">
                                            {languages?.map((lang) => (
                                                <>
                                                    <div className="inline-block mr-2 mb-2">
                                                        <span className="font-bold">{lang?.item} </span> - <span className="opacity-75">{lang?.proficiency}</span>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="py-8 px-4 grid grid-cols-1">
                                        <h3 className="font-bold mb-2 text-black">Profile {progressLevel}% Completed</h3>
                                        <ProgressBarComponent value={progressLevel} />
                                    </div>
                                </section>

                                {/* Experience Section */}
                                <RecruiterInfoCard recruiterItemsDetails={experience} recruiterItemsDetailsHeading={"Experience"} 
                                    setRecruiterInfo={setRecruiterInfo}/>

                                {/* Education Section */}
                                <RecruiterInfoCard recruiterItemsDetails={education} recruiterItemsDetailsHeading={"Education"} 
                                    setRecruiterInfo={setRecruiterInfo}/>
                            </div>
                        </>
                    )}
                </div>
            </AdminLayout>
        </>
    )
}

export default RecruiterProfile;