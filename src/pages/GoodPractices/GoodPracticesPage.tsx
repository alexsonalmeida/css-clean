import { GoodPractices } from "@/components/ArticlesCategories";
import { Title } from "@/components/ArticleTitle";
import { CodeBlock } from "@/components/CodeBlock";
import { Paragraph } from "@/components/Paragraph";
import { SubsectionTitle } from "@/components/SubsectionTitle";

const tools = [
    {
      name: "CSSNano",
      description: "A powerful CSS minifier that optimizes stylesheets by removing redundant rules.",
      url: "https://cssnano.co"
    },
    {
      name: "NeatCSS",
      description: "An efficient CSS optimizer designed for cleaner and smaller stylesheets.",
      url: "#"
    },
    {
      name: "PostCSS + CSSNano",
      description: "A modern approach to CSS minification by integrating CSSNano with PostCSS.",
      url: "https://postcss.org"
    },
    {
      name: "PurgeCSS",
      description: "Removes unused CSS rules to keep stylesheets lightweight and optimized.",
      url: "https://purgecss.com"
    }
];

const variablesCSSPreprocessorCode = `$primary-color: #3498db;  
body {  
  background-color: $primary-color;  
}`

const nestingCSSPreprocessorCode = `nav {  
  ul {  
    list-style: none;  
    li {  
      display: inline-block;  
    }  
  }  
}`

const mixingCSSPreprocessorCode = `@mixin button-style {  
  padding: 10px 20px;  
  border-radius: 5px;  
}  
button {  
  @include button-style;  
}`

const inheritenceCSSPreprocessorCode = `.btn {  
  padding: 10px;  
  border: none;  
}  
.btn-primary {  
  @extend .btn;  
  background-color: blue;  
}`

const meaningfulClassAndIDsCode = `/* Not ideal. What or why a red button?*/
.red-button { background-color: red; }

/* Better */
.primary-btn { background-color: red; }`

const optimizeYourSelectorsCode = `/* Not ideal. It's hard just to read this selector */
div.container section.main div.content p { font-size: 16px; }

/* Better */
.content p { font-size: 16px; }`

const avoidImportantPropertyCode = `/* Avoid this */
.button { color: blue !important; }

/* Use a more specific selector instead */
.nav .button { color: blue; }`

const defaultStylesForMobileCode = `body {
  font-size: 16px;
  padding: 10px;
}
.button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: blue;
  color: white;
}`

const useMediaQuerysForMobileCode = `@media (min-width: 768px) {  
    .button {
        display: inline-block;
        width: auto;
        padding: 16px;
    }
}`

const utilizeFlexboxAndGridCode = `.container {
    display: flex;
    flex-direction: column;
}
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}`

const optimizeImagesAndFontsCode = `<img src="image-small.jpg" 
    srcset="
        image-small.jpg 480w, 
        image-medium.jpg 1024w
    " 
    sizes="
        (max-width: 600px) 480px,
        (max-width: 1200px) 1024px
    " 
    alt="Responsive Image"
>`

const bemCode = `.button {
  background-color: blue;
  color: white;
}
.button__icon {
  margin-right: 8px;
}
.button--primary {
  background-color: red;
}`

const oocssCode = `.card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card__content {
  padding: 16px;
}`

const smacssCode = `/* Base */
body {
  font-family: Arial, sans-serif;
}

/* Layout */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* Module */
.button {
  padding: 10px 20px;
  border-radius: 4px;
}

/* State */
.button.is-active {
  background-color: green;
  color: white;
}`

export function GoodPracticesPage() {
    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
                <Title>
                    Good Practices in CSS development
                </Title>
                <div className="">
                    <GoodPractices/>
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
                It's no secret that CSS plays a fundamental role in modern web applications. Whether through a preprocessor, framework, or in pure 
                form, this technology has the role of giving style to the HTML document and making the interface visually pleasing and responsive.
                And following the same logic as other technologies, it is possible for CSS codes to work, faithfully portraying the intended interfaces, 
                but do so in a less than optimized way. Knowing this, it is clear that knowing how to build good CSS code is essential for software 
                that runs on the web to be of higher quality.
            </Paragraph>
            <Paragraph>
                But don't worry, there are no problems! In this article, you will find some of the main best practices recommended for building 
                quality CSS code and optimizing every website you build.
            </Paragraph>
            <SubsectionTitle>Use a CSS Preprocessor</SubsectionTitle>
            <Paragraph>
                When working with CSS, maintainability and efficiency can become challenging as your stylesheets grow. A great way to improve
                your workflow is by using a CSS preprocessor like Sass or Less. These tools extend CSS by adding powerful features that make
                styling more dynamic and organized. Some of the benefits of use a CSS preprocessor are:
            </Paragraph>
            <ul className="my-1 md:my-2 space-y-7">
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Variables</h4>
                    <Paragraph>
                        Variables define reusable values for colors, fonts, spacing, and more. This helps maintain consistency across your project.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={variablesCSSPreprocessorCode} language="css"/>
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Nesting</h4>
                    <Paragraph>
                        A way to write CSS in a structured way that mirrors HTML elements, making styles more readable.                    
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={nestingCSSPreprocessorCode} language="css"/>
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Mixing</h4>
                    <Paragraph>
                        The possibility of creating reusable blocks of styles, avoiding repetition and making your CSS more modular.                   
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={mixingCSSPreprocessorCode} language="css"/>
                    </div>
                </li>
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Inheritence</h4>
                    <Paragraph>
                        You can share styles between selectors using the @extend directive .                 
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1 md:mt-4">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={inheritenceCSSPreprocessorCode} language="css"/>
                    </div>
                </li>
            </ul>
            <SubsectionTitle>Use Meaningful Class and ID Names</SubsectionTitle>
            <Paragraph>
                When writing CSS, it's essential to use meaningful and descriptive class and ID names. This improves code readability, 
                maintainability, and collaboration with other developers. Instead of generic or arbitrary names, choose names that clearly describe 
                the purpose or function of the element.
            </Paragraph>
            <div className="shadow-xl rounded-md flex-1">
                <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                    <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                </div>
                <CodeBlock code={meaningfulClassAndIDsCode} language="css"/>
            </div>
            <SubsectionTitle>Optimize Your Selector Definitions</SubsectionTitle>
            <Paragraph>
                Efficient CSS selectors are important for performance and maintainability. Overly complex selectors can slow down rendering, make 
                styles harder to override, and reduce readability. By optimizing your selectors, you ensure faster page loads and a cleaner codebase.
            </Paragraph>
            <div className="shadow-xl rounded-md flex-1">
                <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                    <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                </div>
                <CodeBlock code={optimizeYourSelectorsCode} language="css"/>
            </div>
            <SubsectionTitle>Avoid Using the !important Property</SubsectionTitle>
            <Paragraph>
                The !important rule in CSS can be tempting when trying to override styles quickly, but it often leads to more problems than solutions.
                Overusing it makes styles difficult to manage, increases specificity issues, and creates conflicts that are hard to debug. 
                Instead of relying on !important, it's better to structure your CSS properly.
            </Paragraph>
            <div className="shadow-xl rounded-md flex-1">
                <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                    <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                </div>
                <CodeBlock code={avoidImportantPropertyCode} language="css"/>
            </div>
            <SubsectionTitle>Use BEM, OOCSS, and SMACSS for Scalable CSS</SubsectionTitle>
            <Paragraph>
                When working on large-scale projects, maintaining CSS can become challenging as styles grow more complex.
                Adopting structured methodologies such as **BEM (Block Element Modifier)**, **OOCSS (Object-Oriented CSS)**, and 
                **SMACSS (Scalable and Modular Architecture for CSS)** helps ensure your code remains modular, reusable, 
                and easy to manage. These approaches promote consistency, reduce redundancy, and make styles more predictable across the application.
            </Paragraph>
            <ol className="space-y-4">
                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">1. BEM (Block Element Modifier)</h4>
                    <Paragraph>
                        BEM helps in structuring CSS with clear, self-explanatory class names, making it easier to read and maintain.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                        <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={bemCode} language="css"/>
                    </div>
                </li>

                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">2. OOCSS (Object-Oriented CSS)</h4>
                    <Paragraph>
                        OOCSS encourages reusability by separating structure from skin, ensuring that styles remain modular and adaptable.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                        <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={oocssCode} language="css"/>
                    </div>
                </li>

                <li className="space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">3. SMACSS (Scalable and Modular Architecture for CSS)</h4>
                    <Paragraph>
                        SMACSS divides CSS into logical categories—Base, Layout, Module, State, and Theme—to create a structured and scalable system.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                        <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={smacssCode} language="css"/>
                    </div>
                </li>
            </ol>
            <SubsectionTitle>Use Mobile-First Approach</SubsectionTitle>
            <Paragraph>
                The mobile-first approach is a CSS strategy where you design and develop for mobile devices first, then progressively enhance the 
                experience for larger screens. This technique improves performance, ensures better usability, and aligns with modern responsive design 
                principles.
            </Paragraph>
            <h4 className="font-medium text-gray-600 text-md md:text-lg">How to Implement Mobile-First Design?</h4>
            <Paragraph>
                Today, there's a lot of frameworks that implement the mobile-first approach by default, such as TailwindCSS and Bootstrap. So one of 
                the best ways to ensure you are using this approach is to use one of these frameworks. On the other hand, if you are using pure CSS or
                some preprocessor, there are some steps you can follow to implement the approach, such as:
            </Paragraph>
            <ol className="list-decimal ml-5 space-y-4">
                <li className="list-item space-y-1">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">Start with Default Styles for Mobile</h4>
                        <Paragraph>
                            Write base styles without media queries, assuming a mobile-first approach.
                        </Paragraph>
                        <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={defaultStylesForMobileCode} language="css"/>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">
                        Use Media Queries to Enhance for Larger Screens
                    </h4>
                    <Paragraph>
                        Once mobile styles are in place, use min-width media queries to adjust layouts for bigger screens.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={useMediaQuerysForMobileCode} language="css"/>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">
                        Utilize Flexbox and Grid for Responsive Layouts
                    </h4>
                    <Paragraph>
                        CSS Flexbox and Grid make it easier to create adaptable layouts.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={utilizeFlexboxAndGridCode} language="css"/>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="font-medium text-gray-600 text-md md:text-lg">
                        Optimize Images and Fonts for Mobile
                    </h4>
                    <Paragraph>
                        Use responsive images (srcset) to serve smaller images on mobile.
                        Load lighter fonts to improve performance.
                    </Paragraph>
                    <div className="shadow-xl rounded-md flex-1">
                        <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <CodeBlock code={optimizeImagesAndFontsCode} language="html"/>
                    </div>
                </li>

            </ol>
            <SubsectionTitle>Use minification tools</SubsectionTitle>
            <Paragraph>
                Minifying CSS is an essential optimization technique that removes unnecessary characters such as whitespace, comments, and line breaks
                without altering the functionality of the styles. This process significantly reduces file sizes, leading to faster page loads and 
                improved performance, especially on mobile devices and low-bandwidth connections.
            </Paragraph>
            <Paragraph>Some popular CSS minification tools include: </Paragraph>
            <ul className="space-y-4">
                {tools.map((tool) => (
                    <li key={tool.name} className="space-y-1">
                        <a href={tool.url} target="_blank"  className="font-medium text-gray-600 hover:underline text-md md:text-lg">
                            {tool.name}
                        </a>
                        <Paragraph>{tool.description}</Paragraph>
                    </li>
                ))}
            </ul>
        </main>
    )
}