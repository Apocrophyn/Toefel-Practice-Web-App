
import { WritingQuestion } from "./writing-2026";

export const customWritingQuestions: WritingQuestion[] = [
    // --------------------------------------------------------------------------------
    // ACADEMIC DISCUSSION TASKS (Official Style)
    // --------------------------------------------------------------------------------
    {
        id: "WR_CUST_01",
        type: "academic_discussion",
        topic: "Grading on Participation",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Dr. Johnson",
            message: "This week, we are discussing assessment methods in higher education. Many universities grade students not only on their papers and exams but also on their class participation. Some argue that this encourages active learning and improves public speaking skills. Others believe it penalizes shy students or those who need more time to process information. What is your opinion? Should class participation be a graded component of university courses?"
        },
        students: [
            {
                name: "Maria",
                message: "I think grading participation is unfair. Some students are naturally introverted and feel anxious speaking in front of others, but they might understand the material perfectly. By grading participation, we are testing their personality rather than their academic knowledge. Exams and essays are a much better way to measure what someone has actually learned."
            },
            {
                name: "David",
                message: "I disagree with Maria. In the real world, you constantly have to speak up in meetings and collaborate with teams. University should prepare us for that. If participation isn't graded, no one will read the material before class, and the discussions will be boring. It forces us to engage with the topic."
            }
        ],
        prompt: "Your professor is teaching a class on education. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_02",
        type: "academic_discussion",
        topic: "Targeted Advertising",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Prof. Tanaka",
            message: "We've been looking at digital marketing strategies. One of the most common techniques is targeted advertising, where companies track your online behavior to show you ads based on your interests. Some people find this helpful because they see relevant products. Others find it to be an invasion of privacy. Do you think targeted advertising is an acceptable business practice or should it be strictly regulated?"
        },
        students: [
            {
                name: "Sam",
                message: "I don't mind it. Honestly, I'd rather see ads for things I might actually buy than random commercials for stuff I don't care about. It helps small businesses reach the right customers, too. As long as they aren't selling my private messages or health data, tracking my shopping habits seems like a fair trade for free services like social media."
            },
            {
                name: "Kelly",
                message: "The problem is that we don't know how much they know. It's not just shopping habits; they track where we go, who we talk to, and even our political views. It feels manipulative. I think companies should have to ask for explicit permission before they collect any data at all, opt-in only."
            }
        ],
        prompt: "Your professor is teaching a class on business ethics. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_03",
        type: "academic_discussion",
        topic: "Space Exploration vs Earth Problems",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Dr. Williams",
            message: "Governments around the world spend billions of dollars on space exploration programs, such as missions to Mars or telescopes to study distant galaxies. Critics argue that this money should be spent on solving urgent problems here on Earth, like climate change or poverty. What do you think? Is space exploration a worthy investment of public funds?"
        },
        students: [
            {
                name: "Andrew",
                message: "It's absolutely worth it. Space exploration drives technology that helps us here on Earth—like GPS, solar panels, and medical devices. Plus, it inspires people to study science. We can't just stop looking outward; exploring is part of human nature. We can afford to do both if we manage budgets better."
            },
            {
                name: "Jessica",
                message: "I think it's hard to justify sending rockets to Mars when people don't have clean water or food. The immediate suffering on our planet should be the priority. Once we have a sustainable world, then we can explore the stars. Right now, it feels like a vanity project for wealthy nations."
            }
        ],
        prompt: "Your professor is teaching a class on public policy. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_04",
        type: "academic_discussion",
        topic: "Remote Work Impact",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Prof. Garcia",
            message: "Since the pandemic, remote work has become permanent for many industries. We've discussed the benefits for employees, like no commute. But what about the impact on cities? With fewer workers in downtown offices, restaurants and shops are closing, and public transit is losing money. Do you think the shift to remote work is a net positive or negative for society as a whole?"
        },
        students: [
            {
                name: "Tom",
                message: "It's a net positive. People are saving hours of their life not sitting in traffic, which is better for the environment too. Cities will just have to adapt—maybe turn those empty office buildings into apartments to solve the housing crisis. It's a painful transition, but the old way wasn't efficient."
            },
            {
                name: "Linda",
                message: "I worry about the social isolation. Work is where many people make friends and feel part of a community. If everyone sits at home alone, society becomes more fragmented. Also, small businesses that rely on foot traffic are being destroyed, which hurts the local economy."
            }
        ],
        prompt: "Your professor is teaching a class on sociology. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_05",
        type: "academic_discussion",
        topic: "Influencer Culture",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Dr. Lee",
            message: "Social media influencers have become major figures in marketing and culture. They often promote products and lifestyles to millions of followers. Do you think this 'influencer culture' has a positive or negative effect on the values of young people?"
        },
        students: [
            {
                name: "Mike",
                message: "It's mostly negative. Influencers present a fake, filtered version of reality that makes normal people feel inadequate about their own lives. It promotes materialism—buying things to be cool. It teaches kids that value comes from likes and attention, not hard work or character."
            },
            {
                name: "Sarah",
                message: "I disagree. Influencers allow diverse voices to be heard, not just celebrities chosen by Hollywood. Many influencers promote body positivity, mental health awareness, and sustainability. You just have to follow the right ones. It's a democratic form of media."
            }
        ],
        prompt: "Your professor is teaching a class on media studies. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_06",
        type: "academic_discussion",
        topic: "AI in Art",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Prof. Robinson",
            message: "Artificial Intelligence can now generate paintings, music, and poetry that mimics human styles. Some argue this is a powerful new tool for creativity. Others say it steals from actual artists and lacks the 'soul' of human expression. Should we consider AI-generated works to be 'art'?"
        },
        students: [
            {
                name: "Kenji",
                message: "Art is about expression and intent. An AI has no feelings or life experience; it's just predicting the next pixel or word based on data. It might look pretty, but it's not art because there's no human connection behind it. It's just a product."
            },
            {
                name: "Alice",
                message: "But photography was once considered 'not art' because a machine did the work. The artist uses the AI as a brush. If the final piece moves you or makes you think, does it matter how it was made? It opens up creativity to people who might not have technical drawing skills."
            }
        ],
        prompt: "Your professor is teaching a class on art history. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    },
    {
        id: "WR_CUST_07",
        type: "academic_discussion",
        topic: "Cashless Society",
        timeLimit: 600,
        minWords: 100,
        maxWords: 200,
        professor: {
            name: "Dr. Evans",
            message: "Many countries are moving toward a completely cashless society, where all transactions are digital. This is convenient and reduces crime like robbery. However, it requires everyone to have a bank account and smartphone. Is the move to a fully cashless society a good idea?"
        },
        students: [
            {
                name: "Robert",
                message: "It scares me. If the power goes out or the system is hacked, you can't buy food. Also, every single thing you buy is tracked by the bank. Cash gives you privacy. We shouldn't depend 100% on technology for something as essential as trade."
            },
            {
                name: "Emily",
                message: "Cash is dirty and inefficient. Digital payments are so much faster. It also makes tax evasion and illegal activities harder because there's a paper trail. The convenience for the majority outweighs the risks, and technology is only getting more reliable."
            }
        ],
        prompt: "Your professor is teaching a class on economics. Write a post responding to the professor's question. \n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words."
    }
];
