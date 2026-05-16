const Login6 = () => {
    return (
        <div className="flex flex-col gap-5 justify-around items-center w-75 h-120 p-5 bg-main text-text rounded-md">
            <header className="flex flex-col gap-5">
                <h1 className="flex gap-5 text-accent text-3xl text-shadow-black/50 text-shadow-sm">
                    <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        className="bg-base rounded-md"
                    >
                        <rect
                            x={10}
                            y={5}
                            width={10}
                            height={10}
                            fill="#d8d365"
                        ></rect>
                    </svg>
                    Kindle3D
                </h1>
                <h2 className="text-center text-xs text-text/50">
                    WECOME BACK!
                </h2>
            </header>
            <section className="flex justify-evenly w-full">
                <button className="bg-base py-2 px-4 rounded-md hover:text-base hover:bg-accent duration-300 cursor-pointer">
                    Google
                </button>
                <button className="bg-base py-2 px-4 rounded-md hover:text-base hover:bg-accent duration-300 cursor-pointer">
                    Apple
                </button>
            </section>
            <section className="flex flex-col gap-4 bg-base w-full p-4 rounded-md">
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 w-full bg-main rounded-md focus:bg-accent focus:text-base duration-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 w-full bg-main rounded-md focus:bg-accent focus:text-base duration-300"
                />
            </section>
            <button className="w-full p-2 bg-text text-base rounded-md hover:bg-accent hover:text-black duration-300 cursor-pointer">
                Login
            </button>
            <button className="text-xs text-text/50 cursor-pointer hover:text-text duration-300">
                Forgot password?
            </button>
            <p className="text-sm text-text/40">
                Don't have an account?{" "}
                <a className="text-text/80 hover:text-accent duration-300 cursor-pointer">
                    Register here
                </a>
            </p>
        </div>
    );
};

export default Login6;
