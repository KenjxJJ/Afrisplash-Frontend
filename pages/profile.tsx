import { NextPage } from "next";
import AdminLayout from "layouts/adminLayout";
import { useState } from "react";

interface Recruiter {
    name: string,
    role: string,
    company: string,
    bio: string,
    isActivelyHiring: boolean,
    contact: object,
    desiredSkills: Array<string>,
    languages: Array<object>,
    experience: Array<object>,
    education: Array<object>
}

interface recruiterLink {
    link: string,
    isSelected: boolean
}

const RecruiterInfo = {
    name: "Kenjx",
    role: "recruiter",
    company: "IDesign Agency",
    isActivelyHiring: true,
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ab sequi itaque vitae expedita placeat eius esse nulla magnam, porro quaerat?`,
    contact:
    {
        email: "kenjx@gmail.com",
        phone: "+234 8130312056",
        location: "Nigeria",
        shouldMakePrivate: true
    }
    ,
    desiredSkills: [
        "design", "tech", "product"
    ],
    languages: [
        { item: "english", proficiency: "fluent" },
        { item: "russian", proficiency: "advanced" }
    ],
    experience: [
        {
            year: "2008 - 2010", company: "Microsoft", role: "UI/UX Designer",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
        },
        {
            year: "2016 - 2018", company: "Versuspay", role: "UI/UX Designer",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
        },
        {
            year: "2019 - 2021", company: "Qeema", role: "UI/UX Designer",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
        },
        {
            year: "2021 - Present", company: "Afrisplash", role: "UI/UX Designer",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
        }
    ],
    education: [{
        year: "2008 - 2010", school: "ATBU Bauchi", role: "UI/UX Designer",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
        year: "2016 - 2018", school: "Open Classrooms", role: "UI/UX Designer",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
        year: "2019 - 2021", school: "Youtube Design School", role: "UI/UX Designer",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
        year: "2021 - 2022", school: "Harvard Design School", role: "UI/UX Designer",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    }
    ]
}

const recruiterLinks = [
    {
        link: "My profile",
        isSelected: false
    },
    {
        link: "My company",
        isSelected: false
    }
]

const RecruiterProfile: NextPage = () => {
    const [recruiterInfo, setRecruiterInfo] = useState<Recruiter>(RecruiterInfo);
    const [selectedLink, setSelectedLink] = useState<recruiterLink>({ link: "", isSelected: false });
    const { role, company, isActivelyHiring, languages, experience, education,
        desiredSkills, contact, bio } = recruiterInfo;

    const handleSelectedLink = (link: string, isSelected: boolean) => {
        setSelectedLink({ link, isSelected: !isSelected })
    }

    return (
        <>
            <AdminLayout>
                <header className="grid grid-flow-col grid-cols-3 col-span-full p-0 mb-4 mt-5 border-b 
                    font-bold text-base focus:opacity-95 text-slate-500">
                    {recruiterLinks && (
                        recruiterLinks.map(({ isSelected, link }, index) => (
                            <>
                                <span className="h-auto" key={index}>
                                    <a href="#" className="block px-2 mr-14 mb-2 hover:text-primary_green 
                                      hover:cursor-pointer focus:text-primary_green selected:text-primary_green"
                                        onClick={() => handleSelectedLink(link, isSelected)}>{link}</a>

                                    {selectedLink.isSelected && selectedLink.link === link &&
                                        <span className="z-20 w-40 block border-b-4 
                                            border-primary_green rounded-xl"></span>
                                    }
                                </span>
                            </>
                        )))}
                </header>

                {/* Bio */}
                {recruiterInfo && (
                    <>
                        < div className="grid">
                            <section className="w-100 px-2 py-4 mx-1  my-3 bg-white rounded-lg shadow-sm">
                                <span className="block">Edit</span>
                                <span className="wrapper">Image</span>
                                <span>
                                    <p>{company}</p>
                                    <p>{role}</p>
                                </span>

                                <div>
                                    <span>Actively hiring</span>
                                    <span>{isActivelyHiring}</span>
                                </div>
                                <h3>Bio</h3>
                                <p className=""> {bio} </p>

                                <h3>
                                    <span>Contact </span> <span>Edit</span>
                                </h3>
                                <p>
                                    <span>Email:</span> <span>{contact?.email} </span>
                                </p>
                                <p>
                                    <span>Phone:</span> <span>{contact?.phone} </span>
                                </p>
                                <p>
                                    <span>Location:</span> <span>{contact?.location} </span>
                                </p>
                                <p>
                                    <span>Private Mode </span> <span>{contact?.shouldMakePrivate} </span>
                                </p>

                                <hr></hr>

                                <h3><span>Skills hiring for</span> <span>Edit</span></h3>
                                <div className="w-100 grid grid-flow-rows cols-grid-3">
                                    {desiredSkills.map((skill) => (
                                        <span className="rounded-lg border slate-500">{skill}</span>
                                    ))}
                                </div>

                                <hr></hr>

                                <h4><span>Languages</span><span>Edit</span></h4>
                                <div className="w-100 capitalize py-5">
                                    {languages?.map((lang) => (
                                        <>
                                            <span className="inline-block bold">{lang?.item} </span> - <span className="mx-1 opacity-75">{lang?.proficiency}</span>
                                        </>
                                    ))}
                                </div>

                                <hr></hr>

                                <div>
                                    <h4 className="font-bold">Profile {50}% Completed</h4>
                                    <progress></progress>
                                </div>


                            </section>
                            <section className="w-100 px-2 py-4 mx-1  my-3 bg-white rounded-lg shadow-sm">
                                <h2>

                                    Experience
                                    <span>Edit</span>
                                </h2>

                                {experience && (
                                    experience.map(({ year, company, role, description }) => (
                                        <>
                                            <div>
                                                <h3 className="bold-700">{year}</h3>
                                                <h4 className="text-primary_green">{company}</h4>
                                                <h5 className="">{role}</h5>
                                                <p className="text-slate-600">{description}</p>
                                            </div>
                                        </>
                                    ))
                                )}
                            </section>
                            <section className="w-100 px-2 py-4 mx-1 my-3 bg-white rounded-lg shadow-sm">
                                <h2>
                                    Education
                                    <span>Edit</span>
                                </h2>

                                {education && (
                                    education?.map(({ year, school, role, description }) => (
                                        <>
                                            <div>
                                                <h3 className="bold-700">{year}</h3>
                                                <h4 className="text-primary_green">{school}</h4>
                                                <h5 className="">{role}</h5>
                                                <p className="text-slate-600">{description}</p>
                                            </div>
                                        </>
                                    ))
                                )}
                            </section>
                        </div>
                    </>
                )}
            </AdminLayout>
        </>
    )
}

export default RecruiterProfile;