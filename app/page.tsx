import Image from "next/image";
import { Header } from '../components/Header';
import { Generator } from '../components/Generator';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Generator />
            </main>
        </>
    );
}
