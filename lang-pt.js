/*

    lang-pt.js

    Portuguese (literary) translation for SNAP!

    translated by Manuel Menezes de Sequeira

    Copyright (C) 2016 by Manuel Menezes de Sequeira

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.pt = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ??, ??   \u00c4, \u00e4
    ??, ??   \u00d6, \u00f6
    ??, ??   \u00dc, \u00fc
    ??      \u00df
*/

    // meta informa????o sobre a tradu????o
    'language_name':
        'Portugu??s',
    'language_translator':
        'Manuel Menezes de Sequeira',
    'translator_e-mail':
        'mmsequeira@gmail.com',
    'last_changed':
        '2016-01-08',

    // GUI
    // control bar:
    'untitled':
        'Sem t??tulo',
    'development mode':
        'modo de desenvolvimento',

    // categorias:
    'Motion':
        'Movimento',
    'Looks':
        'Apar??ncia',
    'Sound':
        'Som',
    'Pen':
        'Caneta',
    'Control':
        'Controlo',
    'Sensing':
        'Sensores',
    'Operators':
        'Operadores',
    'Variables':
        'Vari??veis',
    'Lists':
        'Listas',
    'Other':
        'Outros',

    // editor:
    'draggable':
        'arrast??vel',

    // separadores:
    'Scripts':
        'Gui??es',
    'Costumes':
        'Trajes',
    'Sounds':
        'Sons',

    // nomes:
    'Sprite':
        'o actor',
    'Stage':
        'o palco',

    // estilos de rota????o:
    'don\'t rotate':
        'n??o roda',
    'can rotate':
        'roda',
    'only face left/right':
        'olha apenas para a esquerda ou para a direita',

    // bot??o de cria????o de novo actor:
    'add a new sprite':
        'adicionar um novo actor',

    // ajuda nos tabuladores
    'costumes tab help':
        'Importa uma imagem de uma p??gina Web ou de um\n'
            + 'arquivo no teu computador arrastando-a para aqui',
    'import a sound from your computer\nby dragging it into here':
        'Importa um som do teu computador\narrastando-o para aqui',

    // blocos primitivos:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // movimento:
    'Stage selected:\nno motion primitives':
        'Palco seleccionado:\nsem primitivas de movimento',


    'move %n steps':
        'anda %n passos',
    'turn %clockwise %n degrees':
        'gira %clockwise %n ??',
    'turn %counterclockwise %n degrees':
        'gira %counterclockwise %n ??',
    'point in direction %dir':
        'altera a tua direc????o para %dir ??',
    'point towards %dst':
        'aponta em direc????o a %dst',
    'go to x: %n y: %n':
        'vai para as coordenadas (x: %n , y: %n )',
    'go to %dst':
        'vai para a posi????o de %dst',
    'glide %n secs to x: %n y: %n':
        'desliza em %n s para as coordenadas (x: %n , y: %n )',
    'change x by %n':
        'adiciona %n ?? tua coordenada x',
    'set x to %n':
        'altera a tua coordenada x para %n',
    'change y by %n':
        'adiciona %n ?? tua coordenada y',
    'set y to %n':
        'altera a tua coordenada y para %n',
    'if on edge, bounce':
        'se estiveres a bater na borda, ressalta',
    'x position':
        'a coordenada x da posi????o',
    'y position':
        'a coordenada y da posi????o',
    'direction':
        'a direc????o',

    // apar??ncia:
    'switch to costume %cst':
        'muda o traje para %cst',
    'next costume':
        'passa para o pr??ximo traje',
    'costume #':
        'o n??mero do traje',
    'say %s for %n secs':
        'diz %s durante %n s',
    'say %s':
        'diz %s',
    'think %s for %n secs':
        'pensa %s durante %n s',
    'think %s':
        'pensa %s',
    'Hello!':
        'Ol??!',
    'Hmm...':
        'Hmm???',
    'change %eff effect by %n':
        'adiciona ao efeito %eff o valor %n',
    'set %eff effect to %n':
        'altera o teu efeito %eff para %n',
    'clear graphic effects':
        'limpa os efeitos gr??ficos',
    'change size by %n':
        'adiciona %n % ao teu tamanho',
    'set size to %n %':
        'altera o teu tamanho para %n %',
    'size':
        'o tamanho',
    'show':
        'mostra-te',
    'hide':
        'esconde-te',
    'go to front':
        'vem para a frente',
    'go back %n layers':
        'recua %n camadas',

    'development mode \ndebugging primitives:':
        'primitivas de depura????o \ndo modo de desenvolvimento:',
    'console log %mult%s':
        'regista %mult%s na consola',
    'alert %mult%s':
        'mostra janela de alerta com %mult%s',

    // sons:
    'play sound %snd':
        'toca o som %snd',
    'play sound %snd until done':
        'toca o som %snd at?? terminar',
    'stop all sounds':
        'p??ra todos os sons',
    'rest for %n beats':
        'faz uma pausa de %n tempos',
    'play note %n for %n beats':
        'toca a nota %n durante %n tempos',
    'change tempo by %n':
        'adiciona %n bpm ao teu andamento',
    'set tempo to %n bpm':
        'altera o teu andamento para %n bpm',
    'tempo':
        'o andamento',

    // caneta:
    'clear':
        'apaga tudo do palco',
    'pen down':
        'baixa a tua caneta',
    'pen up':
        'levanta a tua caneta',
    'set pen color to %clr':
        'altera a cor da tua caneta para %clr',
    'change pen color by %n':
        'adiciona %n ?? cor da tua caneta',
    'set pen color to %n':
        'altera a cor da tua caneta para %n',
    'change pen shade by %n':
        'adiciona %n ao tom da tua caneta',
    'set pen shade to %n':
        'altera o tom da tua caneta para %n',
    'change pen size by %n':
        'adiciona %n ?? espessura da tua caneta',
    'set pen size to %n':
        'altera a espessura da tua caneta para %n',
    'stamp':
        'carimba-te',
    'fill':
        'enche o palco',

    // controlo:
    'when %greenflag clicked':
        'Quando algu??m clicar em %greenflag',
    'when %keyHat key pressed':
        'Quando algu??m pressionar a tecla %keyHat',
    'when I am %interaction':
        'Quando o rato %interaction',
    'clicked':
        'clicar em ti',
    'pressed':
        'pressionar em ti',
    'dropped':
        'te largar',
    'mouse-entered':
        'entrar em ti',
    'mouse-departed':
        'sair de ti',
    'when %b':
        'Quando %b',
    'when I receive %msgHat':
        'Quando receberes a mensagem %msgHat',
    'broadcast %msg':
        'difunde a mensagem %msg',
    'broadcast %msg and wait':
        'difunde a mensagem %msg e espera',
    'Message name':
        'Qual o nome da mensagem?',
    'message':
        'a mensagem',
    'any message':
        'qualquer mensagem',
    'wait %n secs':
        'espera %n s',
    'wait until %b':
        'espera at?? que %b',
    'forever %c':
        'repete %c para sempre',
    'repeat %n %c':
        'repete %n vezes %c',
    'repeat until %b %c':
        'at?? que %b , repete %c',
    'if %b %c':
        'se %b , ent??o %c',
    'if %b %c else %c':
        'se %b , ent??o %c sen??o, %c',
    'report %s':
        'reporta %s',
    'stop %stopChoices':
        'p??ra %stopChoices',
    'all':
        'tudo',
    'this script':
        'este gui??o de objecto',
    'this block':
        'este gui??o de bloco',
    'stop %stopOthersChoices':
        'p??ra %stopOthersChoices',
    'all but this script':
        'todos os gui??es de objecto excepto este',
    'other scripts in sprite':
        'os outros gui??es deste objecto',
    'pause all %pause':
        'faz pausa em tudo %pause',
    'run %cmdRing %inputs':
        'executa %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'lan??a execu????o de %cmdRing %inputs',
    'call %repRing %inputs':
        'o resultado da invoca????o de %repRing %inputs',
    'run %cmdRing w/continuation':
        'executa %cmdRing com continua????o',
    'call %cmdRing w/continuation':
        'o resultado da invoca????o de %cmdRing com continua????o',
    'warp %c':
        'executa atomicamente %c',
    'when I start as a clone':
        'Quando fores criado como clone',
    'create a clone of %cln':
        'clona %cln',
    'myself':
        '-te',
    'delete this clone':
        'remove-te',

    // sensores:
    'touching %col ?':
        'est??s a tocar em %col',
    'touching %clr ?':
        'est??s a tocar na cor %clr',
    'color %clr is touching %clr ?':
        'a cor %clr est?? a tocar na cor %clr',
    'ask %s and wait':
        'pergunta %s e espera pela resposta',
    'what\'s your name?':
        'Como te chamas?',
    'answer':
        'a resposta dada',
    'mouse x':
        'a coordenada x do rato',
    'mouse y':
        'a coordenada y do rato',
    'mouse down?':
        'o bot??o do rato est?? pressionado',
    'key %key pressed?':
        'a tecla %key est?? a ser pressionada',
    'distance to %dst':
        'a dist??ncia at?? %dst',
    'reset timer':
        'reinicia o cron??metro',
    'timer':
        'o valor do cron??metro',
    '%att of %spr':
        '%att de %spr',
    'http:// %s':
        'o recurso http:// %s',
    'turbo mode?':
        'o modo turbo est?? activo',
    'set turbo mode to %b':
        'alterar o modo turbo para %b',

    'filtered for %clr':
        'filtrado para %clr',
    'stack size':
        'altura da pilha',
    'frames':
        'molduras',

    // operadores:
    '%n mod %n':
        'o resto de %n a dividir por %n',
    'round %n':
        'o arredondamento de %n',
    '%fun of %n':
        '%fun de %n',
    'pick random %n to %n':
        'um valor ao acaso entre %n e %n',
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b ou %b',
    'not %b':
        '?? falso que %b',
    'true':
        'verdadeiro',
    'false':
        'falso',
    'join %words':
        'a jun????o de %words',
    'split %s by %delim':
        'uma lista com os tro??os de %s entre %delim',
    'hello':
        'Ol??',
    'world':
        'mundo!',
    'letter %n of %s':
        'o caractere %n de %s',
    'length of %s':
        'o comprimento de %s',
    'unicode of %s':
        'o c??digo Unicode do caractere %s',
    'unicode %n as letter':
        'o caractere cujo c??digo Unicode ?? %n',
    'is %s a %typ ?':
        '%s ?? um/uma %typ',
    'is %s identical to %s ?':
        '%s ?? id??ntico a %s',

    'type of %s':
        'o tipo de %s',

    // vari??veis:
    'Make a variable':
        'Criar uma vari??vel',
    'Variable name':
        'Qual o nome da vari??vel?',
    'Script variable name':
        'Qual o nome da vari??vel de gui??o?',
    'Delete a variable':
        'Remover uma vari??vel',

    'set %var to %s':
        'altera %var para %s',
    'change %var by %n':
        'adiciona a %var o valor %n',
    'show variable %var':
        'mostra a vari??vel %var',
    'hide variable %var':
        'esconde a vari??vel %var',
    'script variables %scriptVars':
        'cria as vari??veis de gui??o %scriptVars',

    // listas:
    'list %exp':
        'uma lista com %exp',
    '%s in front of %l':
        'a prefixa????o de %s a %l',
    'item %idx of %l':
        '%idx de %l',
    'all but first of %l':
        'uma lista com os itens de %l menos o primeiro',
    'length of %l':
        'o comprimento de %l',
    '%l contains %s':
        '%l cont??m %s',
    'thing':
        'um valor',
    'add %s to %l':
        'acrescenta %s a %l',
    'delete %ida of %l':
        'remove %ida de %l',
    'insert %s at %idx of %l':
        'insere %s como %idx de %l',
    'replace item %idx of %l with %s':
        'substitui %idx de %l por %s',

    // outros
    'Make a block':
        'Criar um bloco',

    // menus
    // snap menu
    'About...':
        'Acerca do Snap!???',
    'Reference manual':
        'Ler o Manual de refer??ncia',
    'Snap! website':
        'Ir para o s??tio Web do Snap!',
    'Download source':
        'Descarregar o c??digo fonte',
    'Switch back to user mode':
        'Regressar ao modo de utilizador',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'Desactivar menus de contexto\nprofundos do Morphic e\nmostrar menus amig??veis.',
    'Switch to dev mode':
        'Passar ao modo de desenvolvimento',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Activar menus de contexto\ne inspectores n??o\namig??veis do Morphic!',

    // menu de projecto
    'Project notes...':
        'Notas deste projecto???',
    'New':
        'Criar um novo projecto',
    'Open...':
        'Abrir um projecto???',
    'Save':
        'Guardar este projecto',
    'Save to disk':
        'Guardar no disco',
    'store this project\nin the downloads folder\n(in supporting browsers)':
        'Guardar este projecto\nna sua pasta de descargas\n'
            + '(em navegadores que o suportem).',
    'Save As...':
        'Guardar este projecto como???',
    'Import...':
        'Importar???',
    'file menu import hint':
        'Abrir um projecto exportado,\nsubstitundo o projecto corrente, ou\n'
            + 'importar uma biblioteca de blocos, um\n'
            + 'traje ou um som para o projecto corrente.',
    'Export project as plain text...':
        'Exportar este projecto como texto simples???',
    'Export project...':
        'Exportar este projecto???',
    'show project data as XML\nin a new browser window':
        'Mostrar os dados do projecto no\nformato XML numa nova janela do navegador.',
    'Export blocks...':
        'Exportar blocos deste projecto???',
    'show global custom block definitions as XML\nin a new browser window':
        'Mostrar as defini????es de blocos\npersonalizados globais no formato\nXML numa nova janela do navegador.',
    'Unused blocks...':
          'Blocos n??o usados???',
    'find unused global custom blocks\nand remove their definitions':
        'Procurar os blocos personalizados globais\nn??o usados e remover as suas defini????es',
    'Remove unused blocks':
        'Remover blocos n??o usados',
    'there are currently no unused\nglobal custom blocks in this project':
        'de momento n??o h?? blocos personalizados\nglobais n??o usados neste projecto',
    'unused block(s) removed':
        'blocos n??o usados removidos',
    'Export summary...':
        'Exportar resumo???',
    'open a new browser browser window\n with a summary of this project':
        'Abrir uma nova janela no navegador\ncontendo um resumo deste projecto',

    'Contents':
        '??ndice',
    'Kind of':
        'Do tipo de',
    'Part of':
        'Uma parte de',
    'Parts':
        'Partes',
    'Blocks':
        'Blocos',
    'For all Sprites':
        'Para todos os Actores',
    'Import tools':
        'Importar as ferramentas oficiais para este projecto',
    'load the official library of\npowerful blocks':
        'Importar para este projecto\na biblioteca oficial de blocos.',
    'Libraries...':
        'Bibliotecas...',
    'Import library':
        'Importar biblioteca',

    // menu da nuvem
    'Login...':
        'Entrar na sua conta???',
    'Signup...':
        'Registar uma nova conta???',

    // menu de prefer??ncias
    'Language...':
        'L??ngua???',
    'Zoom blocks...':
        'Amplia????o dos blocos???',
    'Stage size...':
        'Tamanho do palco???',
    'Stage size':
        'Tamanho do palco',
    'Stage width':
        'Largura do palco',
    'Stage height':
        'Altura do palco',
    'Default':
        'Normal',
    'Blurred shadows':
        'Sombras desfocadas',
    'uncheck to use solid drop\nshadows and highlights':
        'Desassinalar para usar sombras\ne realces n??tidos.',
    'check to use blurred drop\nshadows and highlights':
        'Assinalar para usar sombras\ne realces desfocados.',
    'Zebra coloring':
        'Colora????o em zebra',
    'check to enable alternating\ncolors for nested blocks':
        'Assinalar para alternar\nas cores de blocos aninhados.',
    'uncheck to disable alternating\ncolors for nested block':
        'Desassinalar para deixar de alternar\nas cores de blocos aninhados.',
    'Dynamic input labels':
        'Etiquetas de entrada din??micas',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'Desassinalar para desactivar etiquetas\ndin??micas nas entradas vari??dicas.',
    'check to enable dynamic\nlabels for variadic inputs':
        'Assinalar para activar etiquetas\ndin??micas nas entradas vari??dicas.',
    'Prefer empty slot drops':
        'Preferir largadas em ranhuras vazias',
    'settings menu prefer empty slots hint':
        'Assinalar para focar em ranhuras vazias\nquando arrastando e '
            + 'largando rep??rteres.',
    'uncheck to allow dropped\nreporters to kick out others':
        'Desassinalar para permitir que\nrep??rteres largados '
            + 'desalojem outros.',
    'Long form input dialog':
        'Forma longa da caixa de di??logo dos par??metros',
    'Plain prototype labels':
        'Texto dos prot??tipos simples',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'Desassinalar para mostrar sempre os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to hide (+) symbols\nin block prototype labels':
        'Assinalar para esconder os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to always show slot\ntypes in the input dialog':
        'Assinalar para mostrar sempre\no tipo das ranhuras na caixa\nde di??logo dos par??metros.',
    'uncheck to use the input\ndialog in short form':
        'Desassinalar para usar a forma curta\nda caixa de di??logo dos par??metros.',
    'Virtual keyboard':
        'Teclado virtual',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'Desassinalar para desactivar o\nsuporte do teclado virtual\npara dispositivos '
            + 'm??veis.',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'Assinalar para activar o\nsuporte do teclado virtual\npara dispositivos '
            + 'm??veis.',
    'Input sliders':
        'Deslizadores nas ranhuras',
    'uncheck to disable\ninput sliders for\nentry fields':
        'Desassinalar para desactivar\ndeslizadores nas ranhuras dos blocos.',
    'check to enable\ninput sliders for\nentry fields':
        'Assinalar para activar deslizadores\nnas ranhuras dos blocos.',
    'Clicking sound':
        'Som de cliques',
    'uncheck to turn\nblock clicking\nsound off':
        'Desassinalar para desactivar o som\nproduzido ao clicar nos blocos.',
    'check to turn\nblock clicking\nsound on':
        'Assinar para activar o som\nproduzido ao clicar nos blocos.',
    'Animations':
        'Anima????es',
    'uncheck to disable\nIDE animations':
        'Desassinalar para desactivar\nas anima????es do AID',
    'Turbo mode':
        'Modo turbo',
    'check to prioritize\nscript execution':
        'Assinalar para dar prioridade\n?? execu????o de gui??es.',
    'uncheck to run scripts\nat normal speed':
        'Desssinalar para executar os gui??es\n?? velocidade normal.',
    'check to enable\nIDE animations':
        'Assinalar para activar\nas anima????es do AID',
    'Flat design':
        'Design plano',
    'Keyboard Editing':
        'Edi????o usando o teclado',
    'Thread safe scripts':
        'Gui??es seguros face a threads',
    'uncheck to allow\nscript reentrance':
        'Desassinar para permitir\nreentr??ncia nos gui??es.',
    'check to disallow\nscript reentrance':
        'Assinar para n??o permitir\nreentr??ncia nos gui??es.',
    'Prefer smooth animations':
        'Preferir anima????es suaves',
    'uncheck for greater speed\nat variable frame rates':
        'Desassinalar para aumentar a velocidade\npermitindo ritmos vari??veis das tramas.',
    'check for smooth, predictable\nanimations across computers':
        'Assinalar para obter anima????es mais suaves\ne previs??veis de computador para computador.',
    'Flat line ends':
        'Extremos das linhas planos',
    'check for flat ends of lines':
        'Assinalar para que os extremos das linhas\ndesenhadas pela caneta sejam planos.',
    'uncheck for round ends of lines':
        'Desassinalar para que os extremos das linhas\ndesenhadas pela caneta sejam redondos.',
    'Inheritance support':
        'Suporte para heran??a',

    // entradas
    'with inputs':
        'com argumentos',
    'input names:':
        'com par??metros',
    'Input Names:':
        'Par??metros:',
    'input list:':
        'os itens de',

    // menus de contexto:
    'help':
        'ajuda',

    // palette:
    'hide primitives':
        'esconder blocos primitivos',
    'show primitives':
        'mostrar blocos primitivos',

    // blocos:
    'help...':
        'ajuda???',
    'relabel...':
        'mudar para outro bloco???',
    'duplicate':
        'duplicar',
    'make a copy\nand pick it up':
        'Fazer uma c??pia do\nbloco e agarr??-la.',
    'only duplicate this block':
        'Duplicar apenas este bloco.',
    'delete':
        'remover',
    'script pic...':
        'fotografia do gui??o???',
    'open a new window\nwith a picture of this script':
        'Abrir uma nova janela com\numa fotografia deste gui??o.',
    'ringify':
        'adicionar anel',
    'unringify':
        'remover anel',

    // blocos personalizados:
    'delete block definition...':
        'remover defini????o do bloco???',
    'edit...':
        'editar???',

    // actores:
    'edit':
        'editar',
    'move':
        'mover',
    'detach from':
        'soltar de',
    'detach all parts':
        'soltar todas as partes',
    'export...':
        'exportar???',

    // palco:
    'show all':
        'mostrar todos os actores',
    'pic...':
        'fotografia???',
    'open a new window\nwith a picture of the stage':
        'Abrir uma nova janela com\numa fotografia do palco.',

    // ??rea de gui??es:
    'clean up':
        'arrumar',
    'arrange scripts\nvertically':
        'Organizar os gui??es\nverticalmente.',
    'add comment':
        'adicionar coment??rio',
    'undrop':
        'desfazer ??ltima largada',
    'undo the last\nblock drop\nin this pane':
        'Desfazer a ??ltima largada de um bloco\nneste separador.',
    'scripts pic...':
        'fotografia dos gui??es???',
    'open a new window\nwith a picture of all scripts':
        'Abrir uma nova janela com\numa fotografia de todos os gui??es.',
    'make a block...':
        'criar um bloco???',

    // trajes:
    'rename':
        'alterar o nome',
    'export':
        'exportar',
    'rename costume':
        'Qual o novo nome do traje?',

    // sounds
    'Play sound':
        'Tocar som.',
    'Stop sound':
        'Parar som.',
    'Stop':
        'Parar',
    'Play':
        'Tocar',
    'rename sound':
        'Qual o novo nome do som?',

    // caixas de di??logo
    // bot??es
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Cancelar',
    'Yes':
        'Sim',
    'No':
        'N??o',

    // ajuda
    'Help':
        'Ajuda',

    // amplia????o de blocos
    'Zoom blocks':
        'Amplia????o de blocos',
    'build':
        'cria',
    'your own':
        'os teus pr??prios',
    'blocks':
        'blocos',
    'normal (1x)':
        'normal (1x)',
    'demo (1.2x)':
        'demonstra????o (1.2x)',
    'presentation (1.4x)':
        'apresenta????o (1.4x)',
    'big (2x)':
        'grande (2x)',
    'huge (4x)':
        'enorme (4x)',
    'giant (8x)':
        'gigante (8x)',
    'monstrous (10x)':
        'monstruosa (10x)',

    // Gestor de Projectos
     'Untitled':
        'Sem t??tulo',
    'Open Project':
        'Abrir Projecto',
    '(empty)':
        '(nada)',
    'Saved!':
        'Guardado!',
    'Delete Project':
        'Remover Projecto',
    'Are you sure you want to delete':
        'Quer mesmo remover',
    'rename...':
        'alterar o nome???',

    // editor de trajes
    'Costume Editor':
        'Editor de Trajes',
    'click or drag crosshairs to move the rotation center':
        'Clique ou arraste a mira para alterar o centro de rota????o.',

    // notas de projecto
    'Project Notes':
        'Notas do Projecto',

    // novo projecto
    'New Project':
        'Novo Projecto',
    'Replace the current project with a new one?':
        'Substituir este projecto por um novo projecto?',

    // guardar projecto
    'Save Project As...':
        'Guardar Projecto Como???',

    // exportar blocos
    'Export blocks':
        'Exportar blocos',
    'Import blocks':
        'Importar blocos',
    'this project doesn\'t have any\ncustom global blocks yet':
        'Este projecto ainda n??o tem\nnenhum bloco personalizado global.',
    'select':
        'seleccionar',
    'none':
        'nenhum',

    // caixa de di??logo de vari??veis
    'for all sprites':
        'para todos os objectos',
    'for this sprite only':
        'apenas para este objecto',

    // caixa de di??logo de blocos
    'Change block':
        'Alterar tipo de bloco',
    'Command':
        'Comando',
    'Reporter':
        'Rep??rter',
    'Predicate':
        'Predicado',

    // editor de blocos
    'Block Editor':
        'Editor de Blocos',
    'Apply':
        'Aplicar',

    // caixa de di??logo de remo????o de bloco
    'Delete Custom Block':
        'Remover Bloco Personalizado',
    'block deletion dialog text':
        'Quer mesmo remover este bloco e '
            + 'todas as suas utiliza????es?',

    // caixa de di??logo de par??metros
    'Create input name':
        'Criar par??metro',
    'Edit input name':
        'Editar par??metro',
    'Edit label fragment':
        'Editar etiqueta',
    'Title text':
        'Etiqueta',
    'Input name':
        'Par??metro',
    'Delete':
        'Remover',
    'Object':
        'Objecto',
    'Number':
        'N??mero',
    'Text':
        'Texto',
    'List':
        'Lista',
    'Any type':
        'Qualquer tipo',
    'Boolean (T/F)':
        'Booleano (V/F)',
    'Command\n(inline)':
        'Comando\n(em linha)',
    'Command\n(C-shape)':
        'Comando\n(em forquilha)',
    'Any\n(unevaluated)':
        'Rep??rter\n(forma especial)',
    'Boolean\n(unevaluated)':
        'Predicado\n(forma especial)',
    'Single input.':
        'Par??metro ??nico.',
    'Default Value:':
        'Valor em caso de omiss??o do argumento:',
    'Multiple inputs (value is list of inputs)':
        'M??ltiplos argumentos (o valor do par??metro ?? a lista dos argumentos).',
    'Upvar - make internal variable visible to caller':
        'Tornar o par??metro vis??vel ao invocador.',

    // Acerca do Snap
    'About Snap':
        'Sobre o Snap!',
    'Back...':
        'Para tr??s???',
    'License...':
        'Licen??a???',
    'Modules...':
        'M??dulos???',
    'Credits...':
        'Cr??ditos???',
    'Translators...':
        'Tradutores???',
    'License':
        'Licen??a',
    'current module versions:':
        'vers??es actuais dos m??dulos',
    'Contributors':
        'Contribuidores',
    'Translations':
        'Tradu????es',

    // observadores de vari??veis
    'normal':
        'normal',
    'large':
        'grande',
    'slider':
        'potenci??metro',
    'slider min...':
        'm??nimo do potenci??metro???',
    'slider max...':
        'm??ximo do potenci??metro???',
    'import...':
        'importar???',
    'Slider minimum value':
        'Valor m??nimo do potenci??metro',
    'Slider maximum value':
        'Valor m??ximo do potenci??metro',

    // observadores de listas
    'length: ':
        'comprimento: ',

    // coment??rios
    'add comment here...':
        'colocar aqui um coment??rio???',

    // drop downs
    // direc????es
    '(90) right':
        '90?? (direita)',
    '(-90) left':
        '-90?? (esquerda)',
    '(0) up':
        '0?? (cima)',
    '(180) down':
        '180?? (baixo)',

    // detec????o de colis??es
    'mouse-pointer':
        'o ponteiro do rato',
    'edge':
        'a borda',
    'pen trails':
        'tra??os da caneta',

    // trajes
    'Turtle':
        'tartaruga',
    'Empty':
        'vazio',

    // efeitos gr??ficos
    'brightness':
        'brilho',
    'ghost':
        'fantasma',
    'negative':
        'negativo',
    'comic':
        'ondeado',
    'confetti':
        'cor',

    // teclas
    'space':
        'espa??o',
    'up arrow':
        'seta para cima',
    'down arrow':
        'seta para baixo',
    'right arrow':
        'seta para a direita',
    'left arrow':
        'seta para a esquerda',
    'any key':
        'qualquer',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messagens
    'new...':
        'Nova???',

    // fun????es matem??ticas
    'abs':
        'o valor absoluto',
    'ceiling':
        'o arredondamento para cima',
    'floor':
        'o arredondamento para baixo',
    'sqrt':
        'a raiz quadrada',
    'sin':
        'o seno',
    'cos':
        'o cosseno',
    'tan':
        'a tangente',
    'asin':
        'o arco-seno',
    'acos':
        'o arco-cosseno',
    'atan':
        'o arco-tangente',
    'ln':
        'o logaritmo natural',
    'e^':
        'a exponencial',

    // delimitadores
    'letter':
        'letra',
    'whitespace':
        'espa??os em branco',
    'line':
        'linha',
    'tab':
        'tabuladores',
    'cr':
        'retornos',

    // tipos de dados
    'number':
        'n??mero',
    'text':
        'texto',
    'Boolean':
        'booleano',
    'list':
        'lista',
    'command':
        'comando',
    'reporter':
        'rep??rter',
    'predicate':
        'predicado',

    // ??ndices de listas
    'last':
        'o ??ltimo item',
    'any':
        'um item ao acaso',

    // em falta no ficheiro lang-de.js
    'grow':
        'aumentar',
    'shrink':
        'reduzir',
    'flip ???':
        'inverter ???',
    'flip ???':
        'inverter ???',
    'Export all scripts as pic...':
        'Exportar todos os gui??es como fotografia???',
    'show a picture of all scripts\nand block definitions':
        'Mostra uma imagem com todos\nos gui??es e defini????es de blocos',
    'current %dates':
        '%dates corrente',
    'year':
        'ano',
    'month':
        'm??s',
    'date':
        'dia',
    'day of week':
        'dia da semana',
    'hour':
        'hora',
    'minute':
        'minuto',
    'second':
        'segundo',
    'time in milliseconds':
        'tempo (em milisegundos)',
    'find blocks...':
        'procurar blocos???',
    'costume name':
        'o nome do traje',
    'Open':
        'Abrir',
    'Share':
        'Partilhar',
    'Snap!Cloud':
        'Snap!Nuvem',
    'Cloud':
        'Nuvem',
    'could not connect to:':
        'N??o foi poss??vel ligar a:',
    'Service:':
        'Servi??o:',
    'login':
        'autentica????o',
    'ERROR: INVALID PASSWORD':
        'ERRO: PALAVRA-PASSE INV??LIDA',
    'Browser':
        'Navegador',
    'Sign up':
        'Registar nova conta',
    'Signup':
        'Registo de nova conta',
    'Sign in':
        'Entrar',
    'Logout':
        'Sair',
    'Change Password...':
        'Alterar palavra-passe???',
    'Change Password':
        'Alterar palavra-passe',
    'Account created.':
        'Conta criada.',
    'An e-mail with your password\nhas been sent to the address provided':
        'Foi enviada uma mensagem para\no endere??o disponibilizado\ncontendo a sua palavra-passe.',
    'now connected.':
        'entrou.',
    'disconnected.':
        'saiu.',
    'Reset password':
        'Recuperar palavra-passe',
    'Reset Password...':
        'Recuperar palavra-passe???',
    'User name:':
        'Nome de utilizador:',
    'Password:':
        'Palavra-passe:',
    'Old password:':
        'Palavra-passe actual:',
    'New password:':
        'Nova palavra-passe:',
    'Repeat new password:':
        'Repita a nova palavra-passe:',
    'Birth date:':
        'Data de nascimento:',
    'January':
        'Janeiro',
    'February':
        'Fevereiro',
    'March':
        'Mar??o',
    'April':
        'Abril',
    'May':
        'Maio',
    'June':
        'Junho',
    'July':
        'Julho',
    'August':
        'Agosto',
    'September':
        'Setembro',
    'October':
        'Outubro',
    'November':
        'Novembro',
    'December':
        'Dezembro',
    'year:':
        'ano:',
    ' or before':
        ' ou antes',
    'E-mail address:':
        'Endere??o de correio electr??nico:',
    'E-mail address of parent or guardian:':
        'Endere??o de encarregado de educa????o:',
    'Terms of Service...':
        'Termos do Servi??o???',
    'Privacy...':
        'Privacidade???',
    'I have read and agree\nto the Terms of Service':
        'Li e declaro concordar\ncom os Termos do Servi??o',
    'stay signed in on this computer\nuntil logging out':
        'manter-me autenticado neste\ncomputador at?? que saia',
    'please fill out\nthis field':
        'Por favor preencha\neste campo.',
    'User name must be four\ncharacters or longer':
        'O nome de utilizador tem de ter\npelo menos quatro caracteres.',
    'please provide a valid\nemail address':
        'Por favor indique um endere??o\nde correio electr??nico v??lido.',
    'password must be six\ncharacters or longer':
        'A palavra-passe tem de ter\npelo menos seis caracteres.',
    'passwords do\nnot match':
        'As palavras-passe\nn??o correspondem.',
    'please agree to\nthe TOS':
        'Por favor concorde com\nos Termos do Servi??o.',
    'Examples':
        'Exemplos',
    'You are not logged in':
        'Ainda n??o se autenticou',
    'Updating\nproject list...':
        'Actualizando a\nlista de projectos???',
    'Opening project...':
        'Abrindo o projecto???',
    'Fetching project\nfrom the cloud...':
        'Obtendo o projecto\nda nuvem???',
    'Saving project\nto the cloud...':
        'Guardando o projecto\nna nuvem???',
    'Sprite Nesting':
        'Actores compostos',
    'uncheck to disable\nsprite composition':
        'Desassinalar para desactivar\na composi????o de actores.',
    'Codification support':
        'Suportar produ????o de c??digo',
    'check for block\nto text mapping features':
        'Assinalar para funcionalidades\nde mapeamento entre blocos e texto.',
    'saved.':
        'guardado.',
    'options...':
        'op????es???',
    'read-only':
        'apenas leitura',
    'Input Slot Options':
        'Op????es de Ranhura de Entrada',
    'Enter one option per line.Optionally use "=" as key/value delimiter\ne.g.\n   the answer=42':
        'Introduza uma op????o por linha. Opcionalmente, use "=" como separador\nentre chave e valor, e.g.\n   a resposta=42',
    'paint a new sprite':
        'Pintar um novo actor.',
    'Paint a new costume':
        'Pintar um novo traje.',
    'add a new Turtle sprite':
        'Adicionar um novo actor.',
    'check for alternative\nGUI design':
        'Assinalar para um design alternativo\nda interface gr??fica com o utilizador.',
    'Rasterize SVGs':
        'Transformar SVG em mapas de bits',
    'check to rasterize\nSVGs on import':
        'Assinalar para transformar os arquivos SVG\nem mapas de bits durante a importa????o.',
    'comment pic...':
        'fotografia do coment??rio???',
    'open a new window\nwith a picture of this comment':
        'Abrir uma nova janela com\numa fotografia deste coment??rio.',
    'undo':
        'desfazer',
    'Brush size':
        'Espessura do pincel',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Preservar propor????es das formas?\n(tamb??m pode pressionar shift)',
    'Eraser tool':
        'Borracha',
    'Paintbrush tool\n(free draw)':
        'Pincel\n(desenho livre)',
    'Line tool\n(shift: vertical/horizontal)':
        'Segmento de recta\n(shift: vertical/horizontal)',
    'Stroked Rectangle\n(shift: square)':
        'Rect??ngulo\n(shift: quadrado)',
    'Filled Rectangle\n(shift: square)':
        'Rect??ngulo preenchido\n(shift: quadrado)',
    'Stroked Ellipse\n(shift: circle)':
        'Elipse\n(shift: circunfer??ncia)',
    'Filled Ellipse\n(shift: circle)':
        'Elipse preenchida\n(shift: c??rculo)',
    'Fill a region':
        'Balde de tinta',
    'Set the rotation center':
        'Estabelecer centro de rota????o',
    'Pipette tool\n(pick a color anywhere)':
        'Pipeta\n(recolher uma cor em qualquer lado)',
    'Paint Editor':
        'Editor de Pintura',
    'square':
        'quadrado',
    'pointRight':
        'tri??ngulo para a direita',
    'gears':
        'roda dentada',
    'file':
        'arquivo',
    'fullScreen':
        'ecr?? inteiro',
    'normalScreen':
        'ecr?? normal',
    'smallStage':
        'palco pequeno',
    'normalStage':
        'palco normal',
    'turtle':
        'tartaruga',
    'stage':
        'palco',
    'turtleOutline':
        'contorno de tartaruga',
    'pause':
        'pausa',
    'flag':
        'bandeira',
    'octagon':
        'oct??gono',
    'cloud':
        'nuvem',
    'cloudOutline':
        'contorno de nuvem',
    'cloudGradient':
        'nuvem com gradiente',
    'turnRight':
        'girar ?? direita',
    'turnLeft':
        'girar ?? esquerda',
    'storage':
        'armazenagem',
    'poster':
        'p??ster',
    'flash':
        'rel??mpago',
    'brush':
        'pincel',
    'rectangle':
        'rect??ngulo',
    'rectangleSolid':
        'rect??ngulo preenchido',
    'circle':
        'circunfer??ncia',
    'circleSolid':
        'c??rculo',
    'crosshairs':
        'mira',
    'paintbucket':
        'balde de tinta',
    'eraser':
        'borracha',
    'pipette':
        'pipeta',
    'speechBubble':
        'bal??o de fala',
    'speechBubbleOutline':
        'contorno de bal??o de fala',
    'arrowUp':
        'seta para cima',
    'arrowUpOutline':
        'contorno de seta para cima',
    'arrowLeft':
        'seta para a esquerda',
    'arrowLeftOutline':
        'contorno de seta para a esquerda',
    'arrowDown':
        'seta para baixo',
    'arrowDownOutline':
        'contorno de seta para baixo',
    'arrowRight':
        'seta para a direita',
    'arrowRightOutline':
        'contorno de seta para a direita',
    'robot':
        'robot',
    'turn pen trails into new costume...':
        'transformar tra??os da caneta em novo traje???',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite':
        'Transforma todos os tra??os da caneta\ne carimbagens num novo traje\n'
            + 'do actor seleccionado neste momento',
    'pen':
        'caneta',
    'tip':
        'ponta',
    'middle':
        'meio',
    'last changed':
        'alterado pela ??ltima vez em',
    'Are you sure you want to publish':
        'Quer mesmo publicar',
    'Are you sure you want to unpublish':
        'Quer mesmo deixar de publicar',
    'Share Project':
        'Partilhar Projecto',
    'Unshare Project':
        'Deixar de Partilhar Projecto',
    'sharing\nproject...':
        'partilhando\nprojecto???',
    'unsharing\nproject...':
        'deixando de partilhar\nprojecto???',
    'shared.':
        'partilhado.',
    'unshared.':
        'deixado de partilhar.',
    'Unshare':
        'N??o Partilhar',
    'password has been changed.':
        'a sua palavra-passe foi alterada.',
    'SVG costumes are\nnot yet fully supported\nin every browser':
        'trajes SVG ainda n??o\ns??o totalmente suportados\nem todos os navegadores',
    'Save Project':
        'Guardar Projecto',
    'script pic with result...':
        'fotografia do gui??o incluindo resultado???',
    'open a new window\nwith a picture of both\nthis script and its result':
        'Abrir uma nova janela com\numa fotografia tanto deste gui??o\ncomo do seu resultado.',
    'JavaScript function ( %mult%s ) { %code }':
        'fun????o JavaScript ( %mult%s ) { %code }',
    'Select categories of additional blocks to add to this project.':
        'Seleccionar categorias de blocos adicionais a acrescentar a este projecto.',
    'Import sound':
        'Importar som',
    'Select a sound from the media library':
        'Seleccionar um som da biblioteca de m??dia.',
    'Import':
        'Importar',
    'Select a costume from the media library':
        'Seleccionar um traje da biblioteca de m??dia.',
    'edit rotation point only...':
        'editar apenas ponto de rota????o???',
    'Export Project As...':
        'Exportar Projecto Como???',
    'a variable of name \'':
        'n??o existe uma vari??vel ??',
    '\'\ndoes not exist in this context':
        '??\nneste contexto',
    '(temporary)':
        '(tempor??ria)',
    'expecting':
        'esperavam-se',
    'input(s), but getting':
        'argumento(s), mas foram passados',
    'parent...':
        'pai???',
    'current parent':
        'pai actual',
    'Dragging threshold...':
        'Limiar de arrastamento???',
    'Cache Inputs':
        'Memorizar entradas',
    'uncheck to stop caching\ninputs (for debugging the evaluator)':
        'Desassinalar para parar de memorizar\nentradas (para depurar o avaliador).',
    'check to cache inputs\nboosts recursion':
        'Assinalar para memorizar as entradas\n(acelera recursividade).',
    'Project URLs':
        'URL de projecto',
    'check to enable\nproject data in URLs':
        'Assinalar para activar dados\ndo projecto nos URL.',
    'uncheck to disable\nproject data in URLs':
        'Desassinalar para desactivar\ndados do projecto nos URL.',
    'export project media only...':
        'Exportar apenas os m??dia do projecto???',
    'export project without media...':
        'Exportar projecto sem os m??dia???',
    'export project as cloud data...':
        'Exportar projecto como dados da nuvem???',
    'open shared project from cloud...':
        'Abrir projecto partilhado a partir da nuvem???',
    'url...':
        'URL???',
    'Export summary with drop-shadows...':
        'Exportar resumo com sombreamento???',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers':
        'Abrir uma nova janela no navegador\ncontendo um resumo deste projecto\n'
        + 'com sombreamento em todas as imagens\n(n??o suportado em todos os navegadores)',
    'specify the distance the hand has to move\nbefore it picks up an object':
        'Especificar a dist??ncia que m??o tem de se\nmover antes de agarrar algum objecto',
    'block variables...':
        'adicionar vari??veis de bloco???',
    'remove block variables...':
        'remover vari??veis de bloco???',
    'block variables':
        'com vari??veis de bloco',
    'experimental -\nunder construction':
        'Experimental ??? em constru????o',

    // produ????o de c??digo
    'map %cmdRing to %codeKind %code':
        'mapear %cmdRing no %codeKind %code',
    'map String to code %code':
        'mapear texto no c??digo %code',
    'map %codeListPart of %codeListKind to code %code':
        'mapear %codeListPart de %codeListKind no c??digo %code',
    'code of %cmdRing':
        'o c??digo de %cmdRing',
    'delimiter':
        'delimitador',
    'collection':
        'colec????o',
    'variables':
        'vari??veis',
    'parameters':
        'par??metros',
    'code':
        'c??digo',
    'header':
        'cabe??alho',
    'header mapping...':
        'mapeamento para cabe??alho???',
    'code mapping...':
        'mapeamento para c??digo???',
    'Code mapping':
        'Mapeamento para c??digo',
    'Header mapping':
        'Mapeamento para cabe??alho',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.':
        'Introduza o c??digo correspondente ?? defini????o do bloco. Use os nomes dos par??metros\n'
            + 'tal como mostrados e use <body> para referenciar o c??digo gerado da defini????o do corpo',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).':
        'Introduza o c??digo correspondente ?? defini????o do bloco. Escolha os seus pr??prios\n'
            + 'nomes para os par??metros (ignorando os nomes mostrados).',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.':
        'Introduza o c??digo que corresponda ?? opera????o do bloco (normalmente uma simples\n'
            + 'invoca????o de rotina). Use <#n> para referenciar os argumentos tal como mostrado',
    'uncheck to disable\nkeyboard editing support':
        'Desassinalar para desactivar\na edi????o usando o teclado.',
    'check to enable\nkeyboard editing support':
        'Assinalar para activar\na edi????o usando o teclado.',
    'Inheritance support':
        'Suporte para heran??a',
    'uncheck to disable\nsprite inheritance features':
        'Desassinalar para desactivar\nfuncionalidades de heran??a de actores.',
    'check for sprite\ninheritance features':
        'Assinalar para activar\nfuncionalidades de heran??a de actores.'
};
