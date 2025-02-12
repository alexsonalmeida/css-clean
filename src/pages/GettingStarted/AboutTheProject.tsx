import { Title } from "@/components/ArticleTitle";
import { Paragraph } from "@/components/Paragraph";
import { SubsectionTitle } from "@/components/SubsectionTitle";

export function AboutTheProject() {
    return (
        <main className="flex flex-col gap-4">
            <Title>
                About the project
            </Title>
            <Paragraph>
                The purpose of this project is to present useful content for developers to create higher quality styling codes, whether with pure CSS 
                or some other abstraction. The platform will bring content about good practices, common mistakes to avoid and components ready for 
                reuse. Therefore, in addition to promoting cleaner and more organized code, the initiative aims to facilitate the construction of more 
                efficient and accessible interfaces.
            </Paragraph>     
            <Paragraph>
                The need for well-structured CSS code becomes even more evident when we consider the complexity of modern projects, which often involve 
                large teams and code that needs to be maintained for long periods. With this in mind, the platform will serve as a repository of knowledge 
                for everyone who wants to elevate the quality of CSS in their projects. It is even possible for any developer around the world to contribute.
            </Paragraph>
            <SubsectionTitle>The origin of the idea</SubsectionTitle>
            <Paragraph>
                Clean CSS was born out of the need for an accessible and well-structured space to gather best practices, avoid common mistakes, and 
                provide reusable components for developers who want to write high-quality CSS code. The idea came from me, Alexson Almeida, a 
                full-stack developer, as part of my Final Graduation Project (TCC) at university.
            </Paragraph>
            <Paragraph>
                Throughout my journey as a developer, I noticed that many projects suffer from disorganized, repetitive, and hard-to-maintain CSS code. 
                Often, we encounter conflicting styles, unnecessarily complex selectors, and bloated CSS files, making code maintenance a real challenge. 
                With that in mind, I felt the need to create a resource that would help both beginners and experienced developers write cleaner, more 
                efficient, and scalable CSS.
            </Paragraph>
        </main>
    )
}