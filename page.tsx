import React, { useState } from "react"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { Truck, ArrowRight } from "lucide-react";

const brands = [ "Mercedes-Benz", "Volkswagen", "Scania", "Volvo", "Iveco", "DAF", "Ford", "Agrale", ];

const exampleComparison = { "Mercedes-Benz": { modelo: "Actros 2651", motor: "510 cv", consumo: "2,8 km/l", preço: "R$ 620.000" }, "Volvo": { modelo: "FH 540", motor: "540 cv", consumo: "2,6 km/l", preço: "R$ 640.000" } };

export default function HomePage() { const [selected, setSelected] = useState({ atual: "", nova: "" }); const [comparar, setComparar] = useState(false);

const handleChange = (e) => { setSelected({ ...selected, [e.target.name]: e.target.value }); };

const handleCompare = () => { setComparar(true); };

const shareText = encodeURIComponent("Pronto para o DISRUPTIVO? Conheça a Truck'ei de Marca e compare caminhões: https://truckei.vercel.app"); const whatsappLink = https://wa.me/?text=${shareText};

return ( <div className="min-h-screen bg-gray-50 p-6" translate="no"> <header className="text-center mb-10"> <h1 className="text-4xl font-bold text-gray-800">Truckei.com.br</h1> <p className="text-xl text-gray-600 mt-2"> Pronto para o <strong>DISRUPTIVO</strong>, conhecer a <strong>Truck'ei de Marca</strong> e mudar tudo? </p> <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"> <Button className="text-lg px-6 py-3">Compare Agora</Button> <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-5 py-3 rounded-lg text-lg hover:bg-green-600 transition"> Compartilhar no WhatsApp </a> </div> </header>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {brands.map((brand) => (
      <Card key={brand} className="rounded-2xl shadow-md hover:shadow-lg transition">
        <CardContent className="p-6 text-center">
          <Truck className="w-10 h-10 mx-auto text-blue-600 mb-4" />
          <h2 className="text-lg font-semibold text-gray-700 mb-2">{brand}</h2>
          <Button variant="outline" className="w-full flex justify-between">
            Ver Modelos <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    ))}
  </section>

  <section className="mt-16 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Truckeie sua decisão</h2>
    <p className="text-gray-600 mb-6">
      Compare lado a lado os modelos, preços e características de cada marca.
    </p>
    <Button className="px-6 py-3 text-lg">Abrir Comparador</Button>
  </section>

  <section className="mt-20 bg-white rounded-xl shadow p-8 max-w-4xl mx-auto">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Simulador: Truckei de Marca</h2>
    <p className="text-gray-600 mb-4">
      Já dirige uma marca? Descubra o que muda se você trocar para outra.
    </p>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <select
        name="atual"
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">Marca Atual</option>
        {brands.map((b) => (
          <option key={atual-${b}}>{b}</option>
        ))}
      </select>
      <select
        name="nova"
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">Nova Marca</option>
        {brands.map((b) => (
          <option key={nova-${b}}>{b}</option>
        ))}
      </select>
      <Button
        type="button"
        onClick={handleCompare}
        className="col-span-1 md:col-span-2 mt-2"
      >
        Simular Troca
      </Button>
    </form>

    {comparar && selected.atual && selected.nova && (
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Comparando: {selected.atual} vs {selected.nova}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {[selected.atual, selected.nova].map((marca) => (
            <Card key={marca} className="p-4 border rounded-xl">
              <h4 className="text-md font-bold mb-2">{marca}</h4>
              <ul className="text-sm text-gray-600">
                <li><strong>Modelo:</strong> {exampleComparison[marca]?.modelo || "-"}</li>
                <li><strong>Motor:</strong> {exampleComparison[marca]?.motor || "-"}</li>
                <li><strong>Consumo:</strong> {exampleComparison[marca]?.consumo || "-"}</li>
                <li><strong>Preço:</strong> {exampleComparison[marca]?.preço || "-"}</li>
              </ul>
            </Card>
          ))}
        </div>
      </div>
    )}
  </section>

  <section className="mt-20 bg-gray-100 rounded-xl p-8 max-w-4xl mx-auto text-center">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Cadastro de Interesse</h2>
    <p className="text-gray-600 mb-6">Preencha o formulário abaixo para participar da comunidade Truckei.</p>
    <iframe
      src="https://forms.gle/kJra8kPctzHyhERt7"
      width="100%"
      height="800"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      className="rounded-xl border"
    >
      Carregando…
    </iframe>
  </section>

  <footer className="mt-16 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Truckei. Todos os direitos reservados.
  </footer>
</div>

); }
