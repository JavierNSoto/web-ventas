export default function Footer({ brand, email }: { brand: string; email: string }) {
    return (
        <footer className="border-t border-slate-200 bg-white/70">
            <div className="container-max py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-600">
                <div>
                    © {new Date().getFullYear()} {brand}. Todos los derechos reservados.
                </div>
                <div className="flex gap-4">
                    <a className="hover:text-slate-900" href={`mailto:${email}`}>{email}</a>
                    <a className="hover:text-slate-900" href="#">Privacidad</a>
                    <a className="hover:text-slate-900" href="#">Términos</a>
                </div>
            </div>
        </footer>
    );
}
