export default function Gracias() {
    return (
        <main className="min-h-screen bg-white text-slate-900 grid place-items-center px-6">
            <div className="max-w-xl w-full rounded-2xl border border-slate-200 p-8">
                <h1 className="text-3xl font-bold">Gracias</h1>
                <p className="mt-3 text-slate-600">
                    Recibí tu solicitud. Te contactaré dentro de 24 horas.
                </p>
                <a
                    className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
                    href="/"
                >
                    Volver al inicio
                </a>
            </div>
        </main>
    );
}
