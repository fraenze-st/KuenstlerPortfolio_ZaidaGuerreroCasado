---
# Anleitung Post-Erstellung

# Layout bleibt immer: default_projekt
layout: default_projekt

# dieses erscheint auf der index.html, und auch als titel in der Projekt Beschreibung
title: "Beispiel Ausstellung"
year: "2017"
place: "Haus, Leipzig"

# Kleines Bild erscheint auf der index.html,
# am besten das ausgesuchte Bild verkleinern, weil schneller ladbar
image-small: ../assets/images/project6.jpg
# image-big: ../assets/images/project5.jpg

# fuer ein bis zwei bilder image-big verwenden
images-big:
  - image_path: ../assets/images/project2.jpg
    title: Birthday Cake
  - image_path: ../assets/images/project7.jpg
    title: Black Forest

# fuer mehr als zwei bilder images-left und images-right verwenden
# auf die Anordnung achten, besser links etwas mehr als rechts
images-left:
  - image_path: ../assets/images/project6.jpg
    title: Apple Pie
  - image_path: ../assets/images/project1.jpg
    title: Birthday Cake
images-right:
  - image_path: ../assets/images/project2.jpg
    title: Apple Pie
# title erscheint, wenn man das Bild anklickt

# oben und unten immer diese drei --- 
---



#### Master Ausstellung
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit. Proin convallis mi ac felis pharetra aliquam. Curabitur dignissim accumsan rutrum. In arcu <br>
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit. Proin convallis mi ac felis pharetra aliquam. Curabitur dignissim accumsan rutrum. In arcu 

zweimal "<br>" und du hast einen Abstand zwischen den Zeilen 
<br>
<br>

Fuer eine Ueberschrift mach 4# davor
#### Dies ist eine Überschrift.

Emphasis:

_Text_
	<!-- Displays text in italics -->

**Text**
	<!-- Displays the text in bold -->

**_Text_**


Links:
[I'm an inline-style link](https://www.google.com)

Einzug, Mach soviele "&nbsp;" hintereinander wie du brauchst:
&nbsp;&nbsp; - Hund

&nbsp;&nbsp; - Katze

&nbsp;&nbsp; - Maus


Wenn du noch etwas anderes formattieren willst, gucke unter "markdown", so heisst dieses Datei-Format