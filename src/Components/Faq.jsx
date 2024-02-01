import { useRef, useState } from "react";

const FaqsCard = (props) => {
    const answerElRef = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState('0px');

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={props.idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {props.faqsList.q}
                {state ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#075E56] ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#075E56] ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-500">{props.faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqsList = [
        // {
        //     q: "What age groups does the childcare center cater to?",
        //     a: "Our childcare center provides care and educational services for children across various age groups, from infants to pre-school and beyond."
        // },
        {
            q: "What is the mission of Little Hearts Academy?",
            a: "Our mission is to provide a nurturing environment for young minds, fostering growth, learning, and joy."
        },
        // {
        //     q: "What are the operating hours of the childcare center?",
        //     a: "We understand the diverse needs of parents, and our center offers flexible operating hours to accommodate various schedules, including early morning drop-offs and late pickups."
        // },
        {
            q: "How old should my child be to join?",
            a: "Children aged 6 weeks to 12 years are welcome at Little Hearts Academy."
        },
        // {
        //     q: "How are the caregivers and teachers qualified and trained?",
        //     a: "Our caregivers and teachers are highly qualified and undergo continuous training in early childhood education. We prioritize creating a nurturing environment for your child's development."
        // },
        {
            q: "Do you have any outdoor play areas?",
            a: "Yes, we have a safe and supervised outdoor play area for children to enjoy."
        },
        // {
        //     q: "What safety measures are in place to ensure the well-being of the children?",
        //     a: "We take safety seriously. Our childcare center adheres to strict safety protocols, including secure entry systems, regular safety drills, and background checks for all staff members."
        // },
        {
            q: "Is there a quiet time or rest time during the day?",
            a: "Yes, we have a calm period to help kids recharge and relax."
        },
        // {
        //     q: "What activities and learning programs are offered to the children?",
        //     a: "Our childcare programs are designed to stimulate the intellectual, emotional, and physical development of each child. We offer a diverse range of activities, including age-appropriate learning, arts and crafts, and outdoor play."
        // },
        {
            q: "How do you handle emergencies?",
            a: "We have emergency procedures in place, and staff are trained to respond quickly."
        }
    ];

    const faqsLists = [
        // {
        //     q: "Is there a trial period available for new families?",
        //     a: "Yes, we offer trial periods for new families to allow you and your child to experience our childcare environment. It's a great way to ensure that our center is the right fit for your family."
        // },
        {
            q: "Are there any additional fees for special events or field trips?",
            a: "Yes, we offer trial periods for new families to allow you and your child to experience our childcare environment. It's a great way to ensure that our center is the right fit for your family."
        },
        {
            q: "Can parents volunteer in the classroom?",
            a: "Yes, parents are welcome to volunteer and join classroom activities."
        },
        {
            q: "How often are the facilities cleaned?",
            a: "We clean and sanitize the facilities daily to ensure a clean environment."
        },
        // {
        //     q: "Can I pack a lunch for my child?",
        //     a: "Certainly! You can pack a lunch, and we'll make sure it's stored and served appropriately."
        // },
        // {
        //     q: "What security measures are in place within the facility?",
        //     a: "We prioritize the security of our facility. Our premises are equipped with surveillance cameras, secure entry systems, and a dedicated staff trained to monitor and ensure the safety of all children."
        // },
        // {
        //     q: "How can parents stay informed about their child's activities and progress?",
        //     a: "We maintain open communication with parents through regular updates, newsletters, and scheduled parent-teacher meetings. Our goal is to keep you informed about your child's activities, development, and achievements."
        // },
        {
            q: "Are there opportunities for parent-teacher conferences?",
            a: "Yes, we schedule regular conferences to discuss your child's progress and address any concerns."
        },
        {
            q: "Do you have a waiting list for enrollment?",
            a: "Yes, we have a waiting list, and we'll notify you when a spot becomes available."
        },
        // {
        //     q: "What is the enrollment process, and are there any specific documents required?",
        //     a: "Our enrollment process is straightforward. To get started, contact our enrollment team, and they will guide you through the necessary paperwork and provide you with all the information you need to enroll your child in our childcare center."
        // }

    ];

    return (
        <section className="leading-relaxed bg-[#FFF5EB]  pt-12 mx-auto px-4 md:px-8 ">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold font-[bitter]">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="flex flex-col gap-8 md:flex-row pt-5">
                <div className="max-w-2xl mx-auto md:w-1/2">
                    {faqsList.map((item, idx) => (
                        <FaqsCard key={idx} idx={idx} faqsList={item} />
                    ))}
                </div>
                <div className="max-w-2xl mx-auto md:w-1/2">
                    {faqsLists.map((item, idx) => (
                        <FaqsCard key={idx} idx={idx} faqsList={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FAQSection;
