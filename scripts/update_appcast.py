"""Atualiza o appcast.xml com a versão e URL do release mais recente.
Use: python scripts/update_appcast.py
"""

import re
import sys
from pathlib import Path

ROOT    = Path(__file__).parent.parent
APPCAST = ROOT / "appcast.xml"
REPO    = "Maria-Cacau/Maria-Cacau-App"

sys.path.insert(0, str(ROOT))
import maria_cacau


def main() -> None:
    version    = maria_cacau.__version__
    asset_name = maria_cacau.__app_name__.replace(" ", ".") + ".exe"
    url        = f"https://github.com/{REPO}/releases/download/{version}/{asset_name}"
    title      = f"Versão {version}"

    xml = APPCAST.read_text(encoding="utf-8")
    xml = re.sub(r"<title>Versão .*?</title>", f"<title>{title}</title>", xml)
    xml = re.sub(r"<sparkle:version>.*?</sparkle:version>", f"<sparkle:version>{version}</sparkle:version>", xml)
    xml = re.sub(r'url=".*?"', f'url="{url}"', xml)

    APPCAST.write_text(xml, encoding="utf-8")
    
    print(f"appcast.xml atualizado → {version}")
    print()
    print("ATENÇÃO: commite e publique o appcast.xml no GitHub para que o auto-update funcione:")


if __name__ == "__main__":
    main()
