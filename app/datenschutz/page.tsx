import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz | Wistho',
  description: 'Datenschutzerklärung von Wistho.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Datenschutz() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-12 tracking-tight">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-primary-dark/75 dark:text-white/75 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Verantwortliche Stelle</h2>
            <p>
              Wistho<br />
              Yanik Wisler &amp; Hanisten Thivakaran<br />
              Schweiz
            </p>
            <p className="mt-2">E-Mail: info [at] wistho.ch</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Allgemeines</h2>
            <p>
              Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen
              Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer
              Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese
              Bestimmungen ein.
            </p>
            <p className="mt-3">
              Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft
              noch weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Erhebung von Daten</h2>
            <p>
              Sie können unsere Website grundsätzlich ohne Angabe persönlicher Daten besuchen.
              Beim Besuch unserer Website werden automatisch Daten in Server-Logfiles gespeichert,
              die Ihr Browser übermittelt. Diese Daten sind nicht bestimmten Personen zuordenbar.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschliesslich technisch
              notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind
              (z.B. Spracheinstellung, Theme-Präferenz).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Externe Dienste</h2>
            <p>
              Diese Website wird über Netlify gehostet. Beim Aufruf der Website werden automatisch
              Informationen an die Server von Netlify übermittelt. Weitere Informationen finden Sie
              in der Datenschutzerklärung von Netlify.
            </p>
            <p className="mt-3">
              Schriftarten werden über Google Fonts eingebunden. Beim Laden der Schriftarten
              wird eine Verbindung zu den Servern von Google hergestellt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung
              sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
            <p className="mt-3">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
              an uns wenden: info [at] wistho.ch
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Änderungen</h2>
            <p>
              Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen.
              Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-dark/10 dark:border-white/10">
          <a
            href="/"
            className="text-sm font-medium text-primary-dark/60 dark:text-white/60 hover:text-primary-dark dark:hover:text-white transition-colors"
          >
            &larr; Zurück zur Startseite
          </a>
        </div>
      </div>
    </section>
  )
}
