// Writing Batch 1 - Academic Discussion Tasks
// TOEFL iBT 2026 Format - 10 tasks per batch

import { AcademicDiscussionTask } from "./writing-2026";

export const writingBatch1: AcademicDiscussionTask[] = [
    {
        id: "WR_B1_001",
        type: "academic_discussion",
        topic: "Technology in Education",
        timeLimit: 600,
        professor: {
            name: "Dr. Martinez",
            message: "In recent years, many schools have adopted one-to-one device programs, giving each student a laptop or tablet. Proponents argue this prepares students for a digital world and provides access to unlimited resources. Critics worry about screen time, distraction, and the digital divide. Should all students be required to use personal devices for schoolwork, or should traditional methods remain primary? Consider both the benefits and potential drawbacks."
        },
        students: [
            {
                name: "Emma",
                message: "I think devices are essential. In the real world, almost every job requires computer skills. If we don't teach students to use technology effectively now, we're setting them up to fail later. Plus, digital textbooks are cheaper and more up-to-date than printed ones. We can't ignore the direction society is heading."
            },
            {
                name: "Marcus",
                message: "I disagree. Studies show that handwriting notes leads to better retention than typing. Also, not all families can afford reliable internet at home, so requiring devices creates inequality. We should use technology as a supplement, not a replacement for proven teaching methods like discussion and hands-on activities."
            }
        ],
        prompt: "Your professor is teaching a class on education. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_002",
        type: "academic_discussion",
        topic: "Four-Day Work Week",
        timeLimit: 600,
        professor: {
            name: "Prof. Anderson",
            message: "Several countries and companies have experimented with a four-day work week, where employees work 32 hours instead of 40 but receive the same pay. Early results show increased productivity and employee satisfaction. However, some industries argue this model is impractical. Would a four-day work week benefit society as a whole, or would it create more problems than it solves?"
        },
        students: [
            {
                name: "Sofia",
                message: "Absolutely yes. When people have more time to rest, they're more focused and productive during work hours. Companies in Iceland tried this and saw no drop in output. Plus, better work-life balance means healthier, happier employees who are less likely to burn out. It's a win-win situation."
            },
            {
                name: "David",
                message: "This sounds great in theory, but it won't work for everyone. What about hospitals, restaurants, or retail stores that need staff seven days a week? You'd have to hire more people, which increases costs. Small businesses especially can't afford that. It might work for office jobs, but not across the board."
            }
        ],
        prompt: "Your professor is teaching a class on labor economics. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_003",
        type: "academic_discussion",
        topic: "Mandatory Voting",
        timeLimit: 600,
        professor: {
            name: "Dr. Thompson",
            message: "In some democracies like Australia and Belgium, voting is compulsory—citizens who don't vote face fines. Supporters say this ensures government truly represents all citizens, not just the most motivated voters. Opponents argue it violates freedom of choice and forces uninformed people to vote. Should voting be mandatory in democratic societies?"
        },
        students: [
            {
                name: "Aisha",
                message: "Yes, it should be mandatory. Democracy only works when everyone participates. Right now, politicians only care about people who vote, which means they ignore young people and minorities who vote less. If everyone had to vote, politicians would have to address everyone's concerns, not just their base."
            },
            {
                name: "Ryan",
                message: "I strongly disagree. Forcing people to vote is anti-democratic. If someone doesn't care enough to vote, they probably haven't researched the issues. We'd end up with random, uninformed votes that don't reflect real opinions. Plus, the right not to participate is just as important as the right to vote."
            }
        ],
        prompt: "Your professor is teaching a class on political science. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_004",
        type: "academic_discussion",
        topic: "Animal Testing in Research",
        timeLimit: 600,
        professor: {
            name: "Prof. Chen",
            message: "Medical research has relied on animal testing for decades, leading to breakthroughs in vaccines, cancer treatment, and surgical techniques. However, animal rights advocates argue that modern alternatives like computer modeling and cell cultures can replace most animal experiments. Should animal testing be banned, or is it a necessary evil for medical progress?"
        },
        students: [
            {
                name: "Isabella",
                message: "We should ban it. Animals feel pain and fear just like humans do. With today's technology, we have alternatives that are often more accurate anyway—human cells respond differently than mouse cells. The cosmetics industry has already proven we can innovate without animal cruelty. Medicine should follow suit."
            },
            {
                name: "James",
                message: "I wish we could eliminate it, but we can't yet. Computer models can't replicate the complexity of a living organism. Before we test a new drug on humans, we need to know it's safe, and that requires animal trials. It's unfortunate, but until we develop better alternatives, it's necessary to save human lives."
            }
        ],
        prompt: "Your professor is teaching a class on bioethics. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_005",
        type: "academic_discussion",
        topic: "Universal Healthcare",
        timeLimit: 600,
        professor: {
            name: "Dr. Williams",
            message: "Most developed nations provide universal healthcare funded by taxes, ensuring all citizens can see a doctor regardless of income. The United States relies primarily on private insurance. Advocates of universal healthcare cite lower costs and better outcomes in other countries. Critics worry about long wait times and reduced quality. Which system better serves society?"
        },
        students: [
            {
                name: "Olivia",
                message: "Universal healthcare is clearly better. In the current U.S. system, people avoid doctors because they can't afford it, leading to worse health outcomes and higher emergency room costs later. Every other wealthy nation has figured this out. Healthcare is a human right, not a luxury for those who can afford insurance."
            },
            {
                name: "Ethan",
                message: "The problem with universal healthcare is efficiency. In Canada and the UK, people wait months for surgeries that happen in weeks here. Also, when government controls healthcare, innovation slows down—most medical breakthroughs come from the U.S. where there's profit incentive. We need reform, but not a complete government takeover."
            }
        ],
        prompt: "Your professor is teaching a class on public health policy. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_006",
        type: "academic_discussion",
        topic: "Standardized Testing",
        timeLimit: 600,
        professor: {
            name: "Prof. Rodriguez",
            message: "Standardized tests like the SAT and ACT have long been used for college admissions, supposedly providing an objective measure of student ability. However, many universities are now making these tests optional, citing concerns about bias and test prep advantages for wealthy students. Do standardized tests serve a valuable purpose, or should they be eliminated from the admissions process?"
        },
        students: [
            {
                name: "Mia",
                message: "They should be eliminated. These tests don't measure intelligence or potential—they measure how much money your family spent on test prep. Students from wealthy areas score higher not because they're smarter, but because they have better resources. Grades and essays give a much fuller picture of who a student really is."
            },
            {
                name: "Noah",
                message: "We still need them. Without standardized tests, how do you compare a student with a 3.8 GPA from an easy school to one with a 3.5 from a rigorous school? Grade inflation is real. Tests provide one consistent measure across all applicants. Yes, they're imperfect, but removing them makes the process even more subjective and unfair."
            }
        ],
        prompt: "Your professor is teaching a class on educational assessment. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_007",
        type: "academic_discussion",
        topic: "Artificial Intelligence and Employment",
        timeLimit: 600,
        professor: {
            name: "Dr. Park",
            message: "Artificial intelligence is rapidly advancing, with AI systems now capable of writing articles, creating art, and even diagnosing diseases. Some economists predict AI will eliminate millions of jobs in the next decade. Others argue it will create new opportunities we can't yet imagine. Should society prepare for mass unemployment due to AI, or is this fear overblown?"
        },
        students: [
            {
                name: "Liam",
                message: "This is a real crisis we need to address now. AI doesn't just threaten factory jobs—it's coming for lawyers, accountants, and writers too. We need policies like universal basic income before millions of people lose their livelihoods. History shows that technological unemployment is real, and this time it's happening faster than ever."
            },
            {
                name: "Ava",
                message: "People have predicted technology would eliminate jobs for centuries, and it never happens. Yes, some jobs disappear, but new ones emerge. A hundred years ago, most people were farmers. Now agriculture employs 2% of Americans, but we have jobs that didn't exist then. AI will be the same—it'll change work, not end it."
            }
        ],
        prompt: "Your professor is teaching a class on future of work. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_008",
        type: "academic_discussion",
        topic: "Social Media Age Restrictions",
        timeLimit: 600,
        professor: {
            name: "Prof. Johnson",
            message: "Research increasingly links social media use to anxiety, depression, and poor self-esteem among teenagers. Some countries are considering raising the minimum age for social media accounts from 13 to 16 or even 18. Supporters say this protects vulnerable young people. Critics argue it's unenforceable and violates free speech. Should there be stricter age limits on social media?"
        },
        students: [
            {
                name: "Sophia",
                message: "Absolutely. Teen brains are still developing, and social media exploits that vulnerability. The constant comparison, cyberbullying, and addiction to likes is damaging an entire generation. Just like we don't let kids drink alcohol or drive until they're mature enough, we shouldn't give them unrestricted access to platforms designed to be addictive."
            },
            {
                name: "Lucas",
                message: "This won't work. Kids will just lie about their age like they already do. Plus, social media isn't all bad—it helps teens connect with friends, find communities, and learn about the world. Instead of banning it, we should teach digital literacy and require platforms to remove harmful features like infinite scroll and public like counts."
            }
        ],
        prompt: "Your professor is teaching a class on digital media and society. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_009",
        type: "academic_discussion",
        topic: "College Tuition-Free Education",
        timeLimit: 600,
        professor: {
            name: "Dr. Lee",
            message: "Student debt in the United States has reached $1.7 trillion, affecting millions of graduates. Some politicians propose making public colleges tuition-free, funded by taxes. Supporters say this would increase equality and economic growth. Opponents worry about the cost and whether it devalues degrees. Should public universities be free for all students?"
        },
        students: [
            {
                name: "Charlotte",
                message: "Yes, education should be free. In Germany and Norway, college is free and their economies are strong. When students graduate without debt, they can buy homes, start businesses, and contribute to the economy immediately. Education benefits society as a whole, so society should pay for it. The current system traps people in debt for decades."
            },
            {
                name: "Mason",
                message: "Free college sounds nice, but who pays for it? Taxpayers. That means people who didn't go to college would be funding degrees for others. Also, if college is free, even more people will go, making degrees less valuable. We should focus on making college more affordable and efficient, not completely free."
            }
        ],
        prompt: "Your professor is teaching a class on higher education policy. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    },
    {
        id: "WR_B1_010",
        type: "academic_discussion",
        topic: "Genetic Privacy",
        timeLimit: 600,
        professor: {
            name: "Prof. Garcia",
            message: "DNA testing services like 23andMe have become popular, allowing people to learn about their ancestry and health risks. However, this genetic data is stored by private companies and could potentially be accessed by insurance companies, employers, or law enforcement. Should individuals have the right to keep their genetic information completely private, or are there situations where sharing this data serves the greater good?"
        },
        students: [
            {
                name: "Harper",
                message: "Genetic privacy should be absolute. Your DNA is the most personal information possible—it reveals not just your health risks but your family's too. If insurance companies get this data, they could deny coverage or charge higher rates based on genetic predispositions. That's discrimination. We need strict laws protecting genetic information."
            },
            {
                name: "Jackson",
                message: "I see the concern, but genetic data could solve crimes and prevent diseases. If someone's DNA matches evidence from a crime scene, shouldn't police be able to use that? Also, sharing genetic information helps researchers find cures for diseases. We need balance—protect privacy but allow beneficial uses with proper oversight."
            }
        ],
        prompt: "Your professor is teaching a class on bioethics and privacy. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
        minWords: 100,
        maxWords: 200
    }
];
