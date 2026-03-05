import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Wistho',
  description: 'Rechtliche Angaben und Kontaktadresse von Wistho.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Impressum() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-12 tracking-tight">
          Impressum
        </h1>

        <div className="space-y-8 text-primary-dark/75 dark:text-white/75 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Kontaktadresse</h2>
            <p>
              Wistho Digital<br />
              Yanik Wisler &amp; Hanisten Thivakaran<br />
              Schweiz
            </p>
            <p className="mt-2">E-Mail: info [at] wistho.ch</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Vertretungsberechtigte Personen</h2>
            <p>
              Yanik Wisler, Co-Founder<br />
              Hanisten Thivakaran, Co-Founder
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p className="mt-3">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
              entstanden sind, werden ausgeschlossen.
            </p>
            <p className="mt-3">
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor,
              Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern,
              zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Haftung für Links</h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
              Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die
              Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary-dark dark:text-white mb-3">Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
              auf der Website gehören ausschliesslich Wistho Digital oder den speziell genannten
              Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
              der Urheberrechtsträger im Voraus einzuholen.
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
