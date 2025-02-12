export default function Footer() {
    return (
        <footer className="bg-gray-200 grid grid-cols-2 md:grid-cols-3 w-full px-6 py-7 gap-y-12">
            <img src="/assets/logo.svg" alt="" className="justify-self-start order-3 md:order-1 w-24"/>
            <div className="order-1 md:order-2 flex flex-col gap-4">
                <a href="" className="text-gray-700 text-xs font-normal">About the project</a>
                <a href="" className="text-gray-700 text-xs">Repository</a>
            </div>
            <div className="order-2 md:order-3 flex flex-col gap-4">
                <a href="" className="text-gray-700 text-xs">Components</a>
                <a href="" className="text-gray-700 text-xs">Best Practices</a>
                <a href="" className="text-gray-700 text-xs">Posts</a>
                <a href="" className="text-gray-700 text-xs">How to contribute</a>
            </div>
        </footer>
    )
}