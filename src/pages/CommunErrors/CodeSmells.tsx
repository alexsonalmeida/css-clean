import { CommonErrors } from "@/components/ArticlesCategories";
import { Title } from "@/components/ArticleTitle";
import { CodeBlock } from "@/components/CodeBlock";
import { Paragraph } from "@/components/Paragraph";
import { SubsectionTitle } from "@/components/SubsectionTitle";

const tooLongRulesCode = `.card {
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: black;
}`

const tooEspecificSelector1Code = `body div > section > article > p span {
    color: red;
}`

const tooEspecificSelector2Code = `#container #main .content .item {
    font-size: 14px;
}`

const tooGeneralSelectorsCode = `div {
    border: none;
    padding: 0;
}`

const propertiesWithHardCodedValuesCode = `.container {
    width: 500px;
    height: 300px;
}`

const undoingStylesCode = `.button {
    border: none;
    margin: 0;
    text-shadow: none;
}`

const universalSelectorsCode = `* {
    margin: 0;
    padding: 0;
}`

const inlinedRulesCode = `<p style="color: red; font-size: 16px;">This is an inline-styled paragraph.</p>`

export function CodeSmells() {
    return (
        <main className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Title>
                    Code Smells
                </Title>
                <div className="">
                    <CommonErrors/>
                </div>                  
            </div>
            <div className="flex items-center gap-2">
                <img src="https://github.com/alexsonalmeida.png" alt="Article author profile" className="w-12 md:w-14 h-12 md:h-14 rounded-full"/>
                <div className="flex flex-col gap-1 md:gap-2">
                    <span className="text-indigo-900 text-sm md:text-base">Alexson Almeida</span>
                    <span className="text-gray-500 text-xs md:text-sm">03/02/2025</span>
                </div>
            </div>
            <Paragraph>
                In software development, code smells are indicators that something in the code may be wrong or need improvement. 
                The term was popularized by Martin Fowler in the book Refactoring: Improving the Design of Existing Code and refers to snippets of code 
                which, although functional, present symptoms of poor structure, making the system more difficult to understand, maintain and evolve.
            </Paragraph>
            <Paragraph>
                An important detail is that code smells are not necessarily bugs, but rather warning signs that suggest the need for 
                refactoring to avoid future problems, such as increased complexity, difficulties in maintenance and introduction of new errors.
                Therefore, it is possible that some of these problems are present in the code, but do not generate explicit errors in the terminal.
            </Paragraph>
            <SubsectionTitle>What are the types of code smells in CSS?</SubsectionTitle>
            <Paragraph>
                Thinking about CSS, there are many types of code smells that can be common and that can cause problems in the future.
                There are many articles and posts that talk about different examples of practices to avoid in CSS. However, in general, some that you 
                have to pay attention to are:
            </Paragraph>
            <ul className="my-1 md:my-2 space-y-7">
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Too Long Rules</h4>
                    <Paragraph>
                        Happens when you got rules with an excessive number of properties, making the CSS harder to read and maintain.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={tooLongRulesCode} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Too Specific Selectors Type I (Too Much Cascading)</h4>
                    <Paragraph>
                        Happens when selectors are excessively deep in the DOM hierarchy, making styles dependent on a specific structure. This makes 
                        the CSS less flexible and more prone to breaking when the HTML structure changes.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={tooEspecificSelector1Code} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Too Specific Selectors Type II (High Specificity Values)</h4>
                    <Paragraph>
                        Occurs when a selector has too many IDs, classes, or elements, increasing specificity and making overrides more difficult. 
                        High specificity can cause conflicts and force developers to use !important, which is not a best practice.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={tooEspecificSelector2Code} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Too General Selectors</h4>
                    <Paragraph>
                        Occurs when very general selectors (e.g., div, body, html) are used without specifying a class or ID, affecting a large portion
                        of the document and making styles harder to manage.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={tooGeneralSelectorsCode} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Properties with Hard-Coded Values</h4>
                    <Paragraph>
                        Happens when fixed values are used instead of relative units like em, %, or rem. This reduces flexibility, making the design 
                        less adaptable to different screen sizes.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={propertiesWithHardCodedValuesCode} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Undoing Style</h4>
                    <Paragraph>
                        Occurs when a property is reset to its default value, which may be unnecessary and add redundant code.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={undoingStylesCode} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Universal Selectors</h4>
                    <Paragraph>
                        Happens when the universal selector * is used, applying styles to every element on the page. While useful in resets, it can 
                        negatively impact performance and unintentionally override important styles.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={universalSelectorsCode} language="css" />
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Inlined Rules</h4>
                    <Paragraph>
                        Happens when CSS styles are applied directly within an HTML element using the style attribute. This reduces reusability, 
                        increases redundancy, and makes maintenance harder because styles are scattered throughout the HTML file instead of being 
                        centralized in a stylesheet.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={inlinedRulesCode} language="css" />
                    </div>
                </li>
            </ul>
            <SubsectionTitle>I got code smells in my code. What to do?</SubsectionTitle>
            <Paragraph>
                If you have identified a code smell in your code, do not despair. They tend to be common, go unnoticed or even identified, but 
                we forget to correct them later. Despite this, as said, they do not generate real errors that can break the application, so it is not 
                the end of the world if there are any in your production application.
            </Paragraph>
            <Paragraph>
                However, it is important to keep in mind that code smells tend to cause problems in the long term, as applications grow. They increase
                complexity, make maintenance difficult and sometimes affect performance. Therefore, being fully aware of the risks of code smells and
                spending time to improve them in the future will make your codes more optimized and performant.
            </Paragraph>
        </main>
    )
}