import { Title } from "@/components/ArticleTitle";
import { Paragraph } from "@/components/Paragraph";

export function HowToContribute() {
    return (
        <main className="flex flex-col gap-4">
            <Title>How to contribute</Title>
            <Paragraph>
                Clean CSS is an open community project, and your contribution can help it become even richer in good practices and reusable components. 
                If you want to help by adding some content, follow these steps::
            </Paragraph>
            <ol className="space-y-4">
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">1. Fork the Repository</h4>
                    <Paragraph>
                        The first step is to create your own copy of the Clean CSS repository. This allows you to make edits and additions without 
                        directly modifying the original code.
                    </Paragraph>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">2. Add Content</h4>
                    <Paragraph>
                        You are free to create new articles, implement reusable components or improve existing information. Ideally, each contribution 
                        follows the established structure and guidelines, maintaining the coherence and quality of the available material.
                    </Paragraph>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">3. Create a Pull Request</h4>
                    <Paragraph>
                        After the changes are completed, try adding the content to the platform through a pull-request. This process allows other 
                        members to review and ensure the new contribution aligns with Clean CSS goals.
                    </Paragraph>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">4. Wait for the review</h4>
                    <Paragraph>
                        Each PR goes through a review stage, where project maintainers analyze the proposed content. If necessary, small corrections 
                        or adjustments may be requested before final approval. Once the review is complete and the contribution is accepted, it becomes 
                        an official part of Clean CSS, helping the community write cleaner, more efficient code
                    </Paragraph>
                </li>
            </ol>
        </main>
    )
}