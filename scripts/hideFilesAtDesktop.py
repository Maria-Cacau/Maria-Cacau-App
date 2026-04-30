"""
Script para esconder arquivos da área de trabalho, exceto .json e .exe. 
Usado principalmente na hora de gravar o vídeo de demo.
"""

import os
import json
import ctypes
import sys

desktop = os.path.join(os.environ["USERPROFILE"], "Desktop")
state_file = os.path.join(desktop, "_desktop_state.json")

FILE_ATTRIBUTE_HIDDEN = 0x02
FILE_ATTRIBUTE_SYSTEM = 0x04

EXTENSOES_PERMITIDAS = (".json", ".exe")


def get_attrs(path):
    return ctypes.windll.kernel32.GetFileAttributesW(path)


def set_attrs(path, attrs):
    ctypes.windll.kernel32.SetFileAttributesW(path, attrs)


def refresh_explorer():
    ctypes.windll.shell32.SHChangeNotify(0x08000000, 0x0000, None, None)


def esconder():
    estado = {}

    for item in os.listdir(desktop):
        caminho = os.path.join(desktop, item)

        if item == "_desktop_state.json":
            continue

        if item.lower().endswith(EXTENSOES_PERMITIDAS):
            continue

        attrs = get_attrs(caminho)
        estado[item] = attrs

        novos_attrs = attrs | FILE_ATTRIBUTE_HIDDEN | FILE_ATTRIBUTE_SYSTEM
        set_attrs(caminho, novos_attrs)

    with open(state_file, "w") as f:
        json.dump(estado, f)

    refresh_explorer()
    print("Desktop limpo ✅")


def restaurar():
    if not os.path.exists(state_file):
        print("Nenhum estado salvo ❌")
        return

    with open(state_file, "r") as f:
        estado = json.load(f)

    for item, attrs in estado.items():
        caminho = os.path.join(desktop, item)

        if os.path.exists(caminho):
            set_attrs(caminho, attrs)

    os.remove(state_file)
    refresh_explorer()
    print("Desktop restaurado ✅")


if __name__ == "__main__":
    arg = "--hide"  # default

    if len(sys.argv) > 1:
        arg = sys.argv[1]

    if arg == "--hide":
        esconder()
    elif arg == "--show":
        restaurar()
    else:
        print("Uso:")
        print("  script.py --hide  (default)")
        print("  script.py --show")