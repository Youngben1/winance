import Image from "next/image";
import Link from "next/link";


const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href='/' className="text-2xl font-bold mt-3">Winance</Link>
			    <div className="pb-6 flex-1 lg:pb-8">{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market
                    </blockquote>

                    <div className="flex items-center justify-between">
                        <div>
                            <cite className="auth-testimonial-author">Osama Bin L</cite>
                            <p className="text-gray-500 max-md:text-sx">Explosives Salesman</p>
                        </div>
                    <div className="flex gap-0.5 items-center">
                        {[1,2,3,4,5].map((star) => (
                            <Image key={star} alt='star' src="/public/assets/icons/star.svg" width={20} height={20} className="w-5 h-5" />
                        ))}
                    </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Image src='/public/assets/images/dashboard-preview.png' alt='Dasboard preview' width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
                </div>
            </section>
		</main>
	);
};

export default Layout;
