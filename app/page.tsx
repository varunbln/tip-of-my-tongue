import Header from "@/components/Header/Header";
import QueryForm from "@/components/QueryForm/QueryForm";

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-start">
            <Header />
            <QueryForm />
        </main>
    );
}
