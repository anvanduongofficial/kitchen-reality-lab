import ChecklistPreview from "@/components/ChecklistPreview";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen px-5 pt-14 pb-24">
      <Header />
      <Hero />
      <ChecklistPreview />
      <EmailForm />
      <Footer />
    </main>
  );
}
