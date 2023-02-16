import { ChangeEvent, useState } from "react";
import { BuildingOfficeIcon, BriefcaseIcon, PencilSquareIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Image from "next/image";
import ProgressBarComponent from "components/atoms/ProgressBar/ProgressBar";
import { ToggleButtonComponent } from "components/atoms/ToggleButton/ToggleButton";
import Modal from "components/molecules/Modals/modal";
import RecruiterInfoCard from "components/molecules/RecruiterInfoCard/RecruiterInfoCard";
import AdminLayout from "layouts/adminLayout";
import { RecruiterInfoData } from "utils/fakeData";
import RecruiterPic from "assets/recruiter_signup/recruiter.png";


interface Recruiter {
    name: string,
    role: string,
    company: string,
    bio: string,
    hiring: boolean,
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
    private: boolean
}

interface Languages {
    item: string,
    proficiency: string
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
    const { name, role, company, hiring, languages, experience, education, desiredSkills, contact, bio } = recruiterInfo;
    const [selectedLink, setSelectedLink] = useState<recruiterLink>({ link: "", isSelected: false });
    const [showExtraInfo, setShowExtraInfo] = useState<boolean>(false);
    const [progressLevel, setProgressLevel] = useState<number>(6);

    const [modal, setModal] = useState(false)
    const [editTitle, setEditTitle] = useState("form")
    const [editItems, setEditItems] = useState({})
    const handleSelectedLink = (link: string, isSelected: boolean) => {
        setSelectedLink({ link, isSelected: !isSelected })
    }
    const handleShowExtraInfo = () => setShowExtraInfo(!showExtraInfo);
    const handleCloseExtraInfo = () => setShowExtraInfo(false);

    // Close modal
    const handleEditInfo = ({ section }) => {
        switch (section) {
            case "bio":
                setEditTitle("bio")
                setEditItems({ name, company, role, bio, hiring })
                break;
            case "contact":
                setEditTitle("contact")
                setEditItems(contact)
                break;
            case "languages":
                let all_languages = {}
                let language_info_index = 0
                for (let language of languages) {
                    language_info_index++
                    for (const [_key, value] of Object.entries(language)) {
                        all_languages = {
                            ...all_languages, [`${_key}#${language_info_index}`]: value
                        }
                    }
                }
                setEditTitle("languages")
                setEditItems({ ...all_languages })
                break;
            case "desiredSkills":
                let allskills = {}
                let skills_info_index = 0
                for (let skill of desiredSkills) {
                    skills_info_index++
                    for (const [_key, value] of Object.entries(skill)) {
                        allskills = {
                            ...allskills, [`${_key}#${skills_info_index}`]: value
                        }
                    }
                }
                setEditTitle("desired skills")
                setEditItems({ ...allskills })
                break;
            case "education":
                let alleducation = {}
                let education_info_index = 0
                for (let edu of education) {
                    education_info_index++
                    for (const [_key, value] of Object.entries(edu)) {
                        alleducation = {
                            ...alleducation, [`${_key}#${education_info_index}`]: value
                        }
                    }
                }
                setEditTitle("education")
                setEditItems({ ...alleducation })
                break;
            case "experience":
                let allexperience = {}
                let experience_info_index = 0
                for (let exp of experience) {
                    experience_info_index++
                    for (const [_key, value] of Object.entries(exp)) {
                        allexperience = {
                            ...allexperience, [`${_key}#${experience_info_index}`]: value
                        }
                    }
                }
                setEditTitle("experience")
                setEditItems({ ...allexperience })
                break;
        }
        // Toggle the modal's visibility
        setModal(!modal)
    }

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>, key: string) => {
        setEditItems({
            ...editItems,
            [key]: e.target.value
        })
    }

    const handleSaveEditedItems = (items) => {
        setRecruiterInfo({
            ...recruiterInfo,
            ...items
        })
    }

    return (
        <>
            <AdminLayout>
                <div className="h-full w-full relative">
                    <Modal show={modal} setModal={setModal} title={editTitle} saveInfo={() => handleSaveEditedItems(editItems)}>
                        {Object.keys(editItems).map((key, index) => (
                            <>
                                <label key={key} htmlFor={`${key}-${index}`} className="inline-block capitalize my-2 font-normal">{key}</label>
                                <input type='text' id={`${key}-${index}`} value={editItems[key]} className="shadow-sm mb-2 py-2 font-light text-sm appearance-none focus:outline-none rounded 
                                        px-2 border-spacing-2 border border-green-200 focus:border-green-300 focus:border-2 focus:shadow-md"
                                    onChange={(e) => handleInputValue(e, key)} />
                            </>
                        ))}
                    </Modal>

                    <div className="relative">
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
                                                className="hover:cursor-pointer block col-span-full mb-1 justify-self-end" onClick={() => handleEditInfo({ section: "bio" })} />
                                            <section className="grid grid-cols-3 place-items-start gap-1">
                                                <span className="relative flex justify-center max-w-[100px]">
                                                    <CheckBadgeIcon width={22} height={22}
                                                        className="absolute rounded-full right-0 top-2 bg-white text-yellow-400 z-10" />
                                                    <Image src={RecruiterPic} className="block rounded-full" />
                                                </span>
                                                <span className="col-span-2 font-light lg:ml-0 md:-ml-1">
                                                    <p className="text-lg font-bold pb-1 text-black">{name} </p>
                                                    <p className="text-sm pb-1">
                                                        <BuildingOfficeIcon height={22} width={22} className="inline-block mr-2 bg-green-200 
                                                        text-primary_green rounded-md p-0.5" />{company}</p>
                                                    <p className="capitalize text-sm">
                                                        <BriefcaseIcon height={20} width={20} className="inline-block mr-2 bg-green-200
                                                        text-primary_green rounded-md p-0.5" />{role}</p>
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
                                                <PencilSquareIcon width={20} height={20} onClick={() => handleEditInfo({ section: "contact" })}
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
                                                {showExtraInfo && (
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
                                                <PencilSquareIcon width={20} height={20} onClick={() => handleEditInfo({ section: "desiredSkills" })}
                                                    className="hover:cursor-pointer inline-block mb-1" />
                                            </h3>
                                            <div className="pt-1 pb-2 -ml-2">
                                                {desiredSkills.map(({ type }) => (
                                                    <span key={type} className="inline-block rounded-2xl border px-3 py-1.5 m-1 text-sm">{type}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Languages */}
                                        <div className="py-6 px-4 text-normal">
                                            <h3 className="flex justify-between font-bold mb-2 text-black">
                                                <span>Languages</span>
                                                <PencilSquareIcon width={20} height={20} onClick={() => handleEditInfo({ section: "languages" })}
                                                    className="hover:cursor-pointer inline-block mb-1" />
                                            </h3>
                                            <div className="capitalize pt-2">
                                                {languages?.map((lang) => (
                                                    <>
                                                        <div className="inline-block mr-2 mb-2" key={lang?.item}>
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
                                    <RecruiterInfoCard recruiterItemsDetails={experience} recruiterItemsDetailsHeading={"experience"}
                                        setRecruiterInfo={setRecruiterInfo} handleEditInfo={handleEditInfo} />

                                    {/* Education Section */}
                                    <RecruiterInfoCard recruiterItemsDetails={education} recruiterItemsDetailsHeading={"education"}
                                        setRecruiterInfo={setRecruiterInfo} handleEditInfo={handleEditInfo} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default RecruiterProfile;
