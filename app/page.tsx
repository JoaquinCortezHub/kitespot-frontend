import WeatherForm from "@/components/form";
import Header from "@/components/header";

export default function Home() {
  return(
      <div className="container mx-auto px-4">
        <Header />
        <main className="mt-8">
          <WeatherForm />
        </main>
      </div>
  )
}
