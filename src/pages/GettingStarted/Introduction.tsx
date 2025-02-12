import { Title } from "@/components/ArticleTitle";
import { Paragraph } from "@/components/Paragraph";
import { SubsectionTitle } from "@/components/SubsectionTitle";

export function Introduction() {
    return (
        <main className="flex flex-col gap-4">
            <Title>
                What is Clean CSS?
            </Title>     
            <SubsectionTitle>Introduction</SubsectionTitle>
            <Paragraph>
                CSS is an essential part of building web applications, allowing the transformation of simple HTML structures into interfaces
                sophisticated and attractive. However, as projects grow, CSS code can become disorganized, repetitive, and difficult. 
                to maintain. Lack of good practices can lead to problems such as code redundancy, difficulties in scalability and impact 
                negative impact on page performance.
            </Paragraph>    
            <Paragraph>
                Given this scenario, there is a need to adopt standards and methodologies that guarantee cleaner, modular and efficient CSS. 
                The Clean CSS proposes a set of guidelines for writing more organized, reusable and easy to maintain code. This includes everything 
                from adopting naming conventions to using techniques that avoid side effects and guarantee the predictability of the styles applied.
            </Paragraph>    
            <SubsectionTitle>Purpose of Clean CSS</SubsectionTitle> 
            <Paragraph>
                Clean CSS seeks to present standards for building code that is intuitive both for the author and for other developers who will need to 
                maintain and evolve the project in the future. By eliminating problematic practices and encouraging more structured approaches, you can 
                improve the development experience and ensure optimized performance for end users.
            </Paragraph>
            <Paragraph>
                With a well-structured CSS code, there are several benefits in applications such as reducing duplication of styles, improving page 
                loading performance and making it easier to adapt the design to different devices. Furthermore, by following best practices, 
                collaboration between developers becomes more fluid, avoiding conflicts and unnecessary rework.
            </Paragraph>
        </main>
    )
}