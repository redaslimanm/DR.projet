# Textes à traduire en arabe (parité FR/AR)

> **Intégré** : la version traduite et validée (`assets-source/a-traduire-ar-rempli(1).md`) est
> en place dans le site. Ce fichier reste comme référence des textes FR source.

Généré à partir des sources FR (`src/data/services-content.js`, pages `fr/`). Une entrée par
bloc : le **texte FR complet** à traduire, puis une ligne « AR : » à remplir. Les clés
renvoient à `src/data/services-content.ar.js` (pages services) ou au fichier HTML indiqué.
Après traduction : suivre `ar-a-faire.md` (format des champs, `FR_ONLY`, `photoAr`, pages à créer).

Les textes AR déjà corrects (non modifiés en FR depuis la traduction) ne figurent pas ici.


## 1. Pages services (`src/data/services-content.ar.js`)


### Consultation et dépistage — clé `'consultation-depistage'`

#### 1. `'consultation-depistage'.what` — tableau de 2 paragraphes

> La consultation ophtalmologique consiste en un examen complet de la santé des yeux et de la fonction visuelle. Elle comprend l’évaluation de l’acuité visuelle, la recherche d’éventuels troubles de la réfraction (myopie, hypermétropie, astigmatisme, presbytie), l’examen des différentes structures de l’œil, la mesure de la pression intraoculaire ainsi que l’examen du fond d’œil lorsque cela est indiqué.
>
> Selon les besoins de chaque patient, des examens complémentaires peuvent être réalisés afin d’établir un diagnostic précis et de proposer une prise en charge personnalisée.

AR :

#### 2. `'consultation-depistage'.callouts[0]` — encadré d’alerte (nouveau champ)

> **Urgence oculaire :** baisse brutale de la vision, douleur, rougeur oculaire ou traumatisme.

AR :

#### 3. `'consultation-depistage'.callouts[1].title` — encadré (nouveau champ)

> Une surveillance particulière est recommandée pour :

AR :

#### 4. `'consultation-depistage'.callouts[1].items[0]`

> **Les enfants**
>
> Dépistage précoce des troubles visuels

AR :

#### 5. `'consultation-depistage'.callouts[1].items[1]`

> **Les personnes diabétiques**
>
> Surveillance des complications oculaires du diabète

AR :

#### 6. `'consultation-depistage'.callouts[1].items[2]`

> **Les antécédents familiaux**
>
> Dépistage des maladies oculaires héréditaires ou familiales

AR :

#### 7. `'consultation-depistage'.callouts[1].items[3]`

> **Les personnes de plus de 40 ans**
>
> Dépistage du glaucome et des changements visuels liés à l’âge

AR :

#### 8. `consultation-depistage.steps[2]`

> **Examen des yeux**
>
> Examen à la lampe à fente des paupières, de la cornée et du cristallin…

AR :

_TODO client (point 1) : le « … » après « cristallin » peut encore changer._

#### 9. `consultation-depistage.faq[0]`

> **Q :** Peut-on consulter même si l’on voit bien ?
>
> **R :** Oui. Certaines maladies oculaires, comme le glaucome ou la rétinopathie diabétique, peuvent évoluer sans symptômes au début. Un dépistage permet de les détecter précocement.

AR :

#### 10. `consultation-depistage.faq[1]`

> **Q :** À quelle fréquence faut-il consulter un ophtalmologue ?
>
> **R :** La fréquence des contrôles dépend de l’âge, des antécédents et de l’état de santé oculaire. Un suivi plus rapproché peut être nécessaire chez les enfants, les personnes diabétiques ou les patients présentant des facteurs de risque de maladies oculaires.

AR :

#### 11. `consultation-depistage.faq[2]`

> **Q :** À partir de quel âge faire examiner les yeux d’un enfant ?
>
> **R :** Un examen ophtalmologique peut être réalisé dès la naissance si nécessaire. Un dépistage visuel est recommandé dès la petite enfance, notamment entre 3 et 4 ans, même en l’absence de symptômes. En cas de strabisme, de reflet pupillaire anormal ou de suspicion de trouble visuel, il est important de consulter sans attendre.

AR :

#### 12. `consultation-depistage.faq[3]`

> **Q :** Faut-il apporter ses anciennes lunettes et ordonnances ?
>
> **R :** Oui, il est conseillé d’apporter vos lunettes actuelles, vos anciennes ordonnances et, si vous en disposez, vos examens ophtalmologiques précédents. Cela facilite l’évaluation de l’évolution de votre vision.

AR :

#### 13. `consultation-depistage.faq[4]` — question exclue du JSON-LD (doublon avec /faq/)

> **Q :** Combien de temps dure une consultation ophtalmologique ?
>
> **R :** La durée varie selon le motif de consultation et les examens nécessaires. Une consultation habituelle dure généralement entre 20 et 30 minutes, mais elle peut être prolongée en cas de dilatation pupillaire ou d’examens complémentaires.

AR :

#### 14. `consultation-depistage.faq[5]`

> **Q :** A-t-on toujours besoin de dilater les pupilles lors d’une consultation ?
>
> **R :** Non, la dilatation des pupilles n’est pas systématique. Notre cabinet est équipé d’un rétinographe permettant de réaliser des photographies du fond d’œil sans dilatation dans de nombreux cas. Cependant, une dilatation pupillaire peut être nécessaire pour un examen plus approfondi de la rétine, évaluer certaines cataractes ou réaliser une réfraction sous cycloplégie chez l’enfant.

AR :

#### 15. `consultation-depistage.faq[6]`

> **Q :** Quand faut-il consulter en urgence ?
>
> **R :** Une baisse brutale de la vision, une douleur oculaire intense, un traumatisme, une brûlure chimique ou l’apparition soudaine d’un voile noir nécessitent une évaluation ophtalmologique urgente.

AR :

#### 16. `consultation-depistage.faq[7]`

> **Q :** Le diabète peut-il affecter la vision ?
>
> **R :** Oui. Le diabète peut entraîner des complications oculaires, notamment une rétinopathie diabétique, parfois sans aucun symptôme initial. Un examen régulier de la rétine est donc recommandé.

AR :

_Non affichées (sans réponse) : « Faut-il une ordonnance pour consulter ? » — rien à traduire tant que la doctoresse n'a pas répondu._


### Chirurgie de la cataracte — clé `cataracte`

#### 17. `cataracte.faq[0]`

> **Q :** L’intervention est-elle douloureuse ?
>
> **R :** La chirurgie de la cataracte est généralement indolore. Elle est le plus souvent réalisée sous anesthésie locale, à l’aide de gouttes anesthésiantes. Le patient peut ressentir une légère pression ou une gêne pendant l’intervention, mais habituellement pas de douleur.

AR :

#### 18. `cataracte.faq[1]`

> **Q :** Combien de temps dure la récupération ?
>
> **R :** La vision commence généralement à s’améliorer dès les premiers jours suivant l’intervention. La récupération visuelle se poursuit progressivement sur plusieurs semaines, selon l’état de l’œil et les particularités de chaque patient. Un traitement par collyres et des consultations de contrôle sont nécessaires après l’opération.

AR :

#### 19. `cataracte.faq[2]`

> **Q :** Faut-il opérer les deux yeux ?
>
> **R :** Non, pas systématiquement. La décision dépend du degré de cataracte et de la gêne visuelle de chaque œil. Lorsque les deux yeux nécessitent une intervention, ils sont généralement opérés séparément, à des dates différentes, afin de permettre une bonne récupération et un suivi adapté.

AR :


### Chirurgie réfractive — clé `'chirurgie-refractive'`

#### 20. `chirurgie-refractive.steps[0]`

> **Consultation initiale**
>
> Échange sur vos attentes, vos antécédents médicaux et vos besoins visuels, suivi d’un examen ophtalmologique complet.

AR :

#### 21. `chirurgie-refractive.steps[1]`

> **Bilan préopératoire**
>
> Réalisation d’examens approfondis, notamment la réfraction, la topographie cornéenne, l’aberrométrie, la pachymétrie et l’évaluation de la surface oculaire, afin de déterminer votre éligibilité à la chirurgie réfractive.

AR :

#### 22. `chirurgie-refractive.steps[2]`

> **Choix de la technique**
>
> Selon les résultats du bilan, discussion des différentes techniques envisageables (LASIK, PKR ou autres), de leurs bénéfices, de leurs limites et des risques éventuels.

AR :

#### 23. `chirurgie-refractive.steps[3]`

> **Intervention et suivi postopératoire**
>
> Après l’intervention, un suivi ophtalmologique régulier permet de surveiller la cicatrisation, la récupération visuelle et de dépister d’éventuelles complications.

AR :

#### 24. `chirurgie-refractive.faq[0]`

> **Q :** Suis-je candidat à la chirurgie réfractive ?
>
> **R :** La chirurgie réfractive permet de corriger certains défauts visuels, notamment la myopie, l’hypermétropie et l’astigmatisme. L’éligibilité dépend de plusieurs critères : la stabilité de la correction, l’épaisseur et la forme de la cornée, l’état de la surface oculaire et la santé générale des yeux. Un bilan préopératoire approfondi est indispensable pour déterminer si une intervention est envisageable et choisir la technique la plus adaptée.

AR :

#### 25. `chirurgie-refractive.faq[1]`

> **Q :** À partir de quel âge peut-on se faire opérer ?
>
> **R :** La chirurgie réfractive est généralement envisagée à partir de 18 ans, à condition que la correction visuelle soit stable depuis au moins un an, parfois davantage selon la situation. L’âge seul ne suffit pas : un examen ophtalmologique complet est nécessaire pour confirmer l’éligibilité.

AR :

#### 26. `chirurgie-refractive.faq[2]`

> **Q :** La chirurgie réfractive est-elle douloureuse ?
>
> **R :** L’intervention est généralement indolore grâce à l’utilisation de gouttes anesthésiantes. Après l’opération, une gêne, des picotements ou une sensation de corps étranger peuvent apparaître. Leur intensité et leur durée varient selon la technique utilisée, notamment entre le LASIK et la PKR.

AR :

#### 27. `chirurgie-refractive.faq[3]`

> **Q :** Quelle est la différence entre le LASIK et la PKR ?
>
> **R :** Le LASIK et la PKR sont deux techniques de chirurgie réfractive au laser permettant de corriger certains défauts visuels. Le LASIK offre généralement une récupération visuelle plus rapide, tandis que la PKR nécessite une cicatrisation de la surface cornéenne plus longue. Le choix dépend notamment de l’épaisseur et de la forme de la cornée, ainsi que des caractéristiques de chaque patient.

AR :

#### 28. `chirurgie-refractive.faq[4]`

> **Q :** Combien de temps faut-il pour retrouver une bonne vision ?
>
> **R :** La récupération visuelle dépend de la technique utilisée. Après un LASIK, la vision s’améliore généralement dès les premières 24 à 48 heures. Après une PKR, l’amélioration est plus progressive et peut nécessiter plusieurs semaines pour se stabiliser.

AR :

#### 29. `chirurgie-refractive.faq[5]`

> **Q :** Peut-on se faire opérer si l’on porte des lentilles de contact ?
>
> **R :** Oui, le port de lentilles n’empêche pas nécessairement une chirurgie réfractive. Toutefois, il est indispensable de les retirer pendant une période déterminée avant le bilan préopératoire, car elles peuvent modifier temporairement la forme de la cornée et fausser les mesures.

AR :

_Non affichées (sans réponse) : « Combien de temps dure le bilan ? » — rien à traduire tant que la doctoresse n'a pas répondu._


### Chirurgie du strabisme — clé `strabisme`

#### 30. `strabisme.photoAlt` — à traduire avec la version arabe de l’affiche

> Enfant portant des lunettes, un œil qui dévie. Texte : « Le strabisme chez l’enfant. Un œil qui dévie de l’axe visuel. Plus il est dépisté tôt, plus la prise en charge est efficace et la vision de l’enfant mieux protégée. »

AR :

#### 31. `strabisme.faq[0]`

> **Q :** À quel âge consulter pour un strabisme ?
>
> **R :** Dès qu’une déviation des yeux est remarquée, quel que soit l’âge de l’enfant. Un strabisme persistant, même chez un nourrisson, nécessite un examen ophtalmologique. Une prise en charge précoce permet notamment de prévenir l’amblyopie (œil paresseux) et de favoriser le bon développement de la vision.

AR :

#### 32. `strabisme.faq[1]`

> **Q :** Le strabisme se corrige-t-il tout seul ?
>
> **R :** Un strabisme véritable ne disparaît généralement pas spontanément. Certaines déviations apparentes chez le nourrisson peuvent être liées à un pseudo-strabisme. Seul un examen ophtalmologique permet de faire la différence et de déterminer si un traitement est nécessaire.

AR :

#### 33. `strabisme.faq[2]`

> **Q :** La chirurgie est-elle toujours nécessaire ?
>
> **R :** Non, la chirurgie n’est pas systématique. Selon le type de strabisme, le traitement peut reposer sur le port de lunettes, une correction de l’amblyopie par occlusion ou d’autres traitements adaptés. Une intervention chirurgicale peut être proposée dans certains cas pour améliorer l’alignement des yeux.

AR :


### Adaptation en lentilles de contact — clé `'lentilles-de-contact'`

#### 34. `'lentilles-de-contact'.what` — tableau de 3 paragraphes

> Chaque œil possède des caractéristiques spécifiques : courbure de la cornée, qualité du film lacrymal et besoins visuels.
>
> L’adaptation des lentilles permet de choisir le type de lentille le mieux adapté, d’évaluer sa stabilité, son confort et sa qualité visuelle, tout en préservant la santé oculaire.
>
> Elle comprend également un apprentissage de la pose, du retrait et des règles d’hygiène et d’entretien des lentilles.

AR :

#### 35. `'lentilles-de-contact'.signCards[0]` — nouveau champ (3 cartes titre + texte)

> **Myopie, hypermétropie et astigmatisme**
>
> Correction des défauts visuels par des lentilles adaptées à la réfraction et aux caractéristiques de l’œil.

AR :

#### 36. `'lentilles-de-contact'.signCards[1]`

> **Kératocône et cornées irrégulières**
>
> Adaptation de lentilles spécialisées, notamment rigides et sclérales, permettant d’améliorer la qualité visuelle lorsque les lunettes ne suffisent plus.

AR :

#### 37. `'lentilles-de-contact'.signCards[2]`

> **Sport et activités quotidiennes**
>
> Une alternative aux lunettes offrant une plus grande liberté de mouvement, selon l’activité pratiquée.

AR :

#### 38. `lentilles-de-contact.steps[0]`

> **Bilan initial**
>
> Examen ophtalmologique, évaluation de la réfraction, de la cornée et du film lacrymal afin de déterminer le type de lentille adapté.

AR :

#### 39. `lentilles-de-contact.steps[1]`

> **Essai des lentilles**
>
> Pose de lentilles d’essai pour évaluer leur centrage, leur stabilité, leur confort et leur adaptation à la surface oculaire.

AR :

#### 40. `lentilles-de-contact.steps[2]`

> **Optimisation de la correction**
>
> Réalisation d’une surréfraction et ajustement des paramètres de la lentille afin d’obtenir la meilleure qualité visuelle possible.

AR :

#### 41. `lentilles-de-contact.steps[3]`

> **Apprentissage et suivi**
>
> Apprentissage de la manipulation, de l’hygiène et de l’entretien des lentilles, suivi de contrôles réguliers pour vérifier leur tolérance et préserver la santé des yeux.

AR :

#### 42. `'lentilles-de-contact'.warnings.title` — nouvelle rubrique

> Les gestes à ne jamais faire avec vos lentilles

AR :

#### 43. `'lentilles-de-contact'.warnings.items[0]`

> **Ne dormez jamais avec vos lentilles.**
>
> Dormir avec des lentilles augmente le risque d’infection cornéenne, parfois grave.

AR :

#### 44. `'lentilles-de-contact'.warnings.items[1]`

> **Ne rincez jamais vos lentilles à l’eau du robinet.**
>
> L’eau, même potable, peut contenir des micro-organismes, notamment des amibes responsables de kératites graves. Utilisez uniquement les solutions adaptées à votre type de lentilles.

AR :

#### 45. `'lentilles-de-contact'.warnings.items[2]`

> **Ne nagez pas et ne prenez pas de douche avec vos lentilles.**
>
> Le contact avec l’eau de piscine, de mer ou de douche augmente le risque d’infections oculaires, notamment de kératite à Acanthamoeba.

AR :

#### 46. `'lentilles-de-contact'.warnings.items[3]`

> **Ne réutilisez jamais une ancienne solution d’entretien.**
>
> Renouvelez entièrement la solution après chaque utilisation et respectez les consignes de nettoyage, de désinfection et de remplacement de l’étui.

AR :

#### 47. `'lentilles-de-contact'.warnings.note`

> **À retenir :** en cas de douleur, rougeur, photophobie ou baisse de vision, retirez immédiatement vos lentilles et consultez rapidement un ophtalmologue. Une infection cornéenne peut évoluer rapidement et menacer la vision.

AR :

#### 48. `lentilles-de-contact.faq[0]`

> **Q :** Quelle différence entre lentilles souples, rigides et sclérales ?
>
> **R :** • Lentilles souples : flexibles et généralement confortables dès les premières utilisations, elles corrigent notamment la myopie, l’hypermétropie, l’astigmatisme et la presbytie.
>
> • Lentilles rigides : perméables à l’oxygène, elles offrent une excellente qualité optique et peuvent être particulièrement utiles en cas d’astigmatisme irrégulier.
>
> • Lentilles sclérales : de plus grand diamètre, elles reposent sur la sclère et passent au-dessus de la cornée, avec un réservoir de liquide entre la lentille et l’œil. Elles sont particulièrement adaptées à certaines cornées irrégulières, notamment en cas de kératocône.

AR :

#### 49. `lentilles-de-contact.faq[1]`

> **Q :** Les lentilles sclérales sont-elles adaptées au kératocône ?
>
> **R :** Oui. Les lentilles sclérales constituent une excellente option pour améliorer la vision des patients atteints de kératocône, notamment lorsque les lunettes ou les lentilles classiques ne permettent plus d’obtenir une vision satisfaisante. Elles permettent de compenser les irrégularités optiques de la cornée tout en offrant souvent un bon confort. Cependant, elles ne stoppent pas l’évolution du kératocône. Un suivi régulier reste indispensable.

AR :

#### 50. `lentilles-de-contact.faq[2]`

> **Q :** Combien de temps dure l’adaptation ?
>
> **R :** La durée varie selon le type de lentille et les caractéristiques de chaque œil. L’adaptation comprend un bilan initial, des essais de lentilles, une évaluation du confort et de la vision, ainsi qu’un apprentissage de leur manipulation. Pour les lentilles spécialisées, notamment sclérales, plusieurs rendez-vous et ajustements peuvent être nécessaires afin d’obtenir une adaptation optimale.

AR :


### Kératocône et maladies de la cornée — clé `keratocone`

#### 51. `keratocone.steps[0]`

> **Diagnostic**
>
> Examen ophtalmologique complet avec réalisation d’une topographie cornéenne et d’une pachymétrie pour analyser la forme, la courbure et l’épaisseur de la cornée, et évaluer la sévérité du kératocône.

AR :

#### 52. `keratocone.steps[1]`

> **Surveillance de l’évolution**
>
> Un suivi régulier, adapté à l’âge et au stade de la maladie, permet de détecter une éventuelle progression du kératocône grâce à la comparaison des examens cornéens successifs.

AR :

#### 53. `keratocone.steps[2]`

> **Stabilisation du kératocône**
>
> En cas de kératocône évolutif, un Cross-Linking cornéen (CXL) peut être indiqué pour renforcer la cornée et freiner, voire stopper, la progression de la maladie. Chez les patients jeunes à haut risque, il peut être envisagé sans attendre une progression documentée.

AR :

#### 54. `keratocone.steps[2] · alt image cross-linking`

> Séance de Cross-Linking cornéen (CXL) : l’œil, maintenu ouvert, sous l’appareil d’irradiation

AR :

#### 55. `keratocone.steps[3]`

> **Réhabilitation visuelle**
>
> Selon le stade du kératocône, la vision peut être améliorée par des lunettes ou des lentilles de contact spécialisées, notamment les lentilles sclérales, permettant de corriger les irrégularités optiques de la cornée.

AR :

#### 56. `keratocone.steps[3] · alt image lentille-sclerale-pose`

> Pose d’une lentille sclérale à l’aide d’une ventouse remplie de solution

AR :

#### 57. `keratocone.steps[3] · alt image lentille-sclerale`

> Lentille sclérale tenue sur une ventouse devant l’œil

AR :

#### 58. `keratocone.faq[0]`

> **Q :** Le kératocône est-il évolutif ?
>
> **R :** Oui, le kératocône est une maladie de la cornée qui peut évoluer progressivement, particulièrement chez les enfants, les adolescents et les jeunes adultes. Son évolution varie d’une personne à l’autre. Un suivi ophtalmologique régulier, notamment par topographie cornéenne, permet de détecter une éventuelle progression et de proposer un traitement adapté pour la freiner.

AR :

#### 59. `keratocone.faq[1]`

> **Q :** En quoi consiste le Cross-Linking ?
>
> **R :** Le Cross-Linking cornéen (CXL) est un traitement destiné à renforcer la structure de la cornée afin de freiner, voire stopper, l’évolution du kératocône. Il consiste à appliquer de la riboflavine (vitamine B2) sur la cornée, puis à l’exposer à une lumière ultraviolette A (UVA) selon un protocole contrôlé. Son objectif principal est de stabiliser la maladie et non de corriger directement la vision. Il peut être associé au port de lunettes ou de lentilles spécialisées.

AR :

#### 60. `keratocone.faq[2]`

> **Q :** Peut-on porter des lentilles avec un kératocône ?
>
> **R :** Oui. Les lentilles de contact spécialisées constituent une solution efficace pour améliorer la vision des patients atteints de kératocône. Selon la forme et la sévérité de la maladie, différentes lentilles peuvent être proposées, notamment les lentilles rigides perméables aux gaz et les lentilles sclérales. Ces dernières reposent sur la sclère et passent au-dessus de la cornée, permettant souvent d’obtenir une meilleure qualité visuelle et un bon confort. Une adaptation personnalisée et un suivi régulier sont indispensables.

AR :

#### 61. `keratocone.faq[3]`

> **Q :** Le kératocône peut-il entraîner une perte de vision ?
>
> **R :** Oui. Le kératocône provoque une déformation progressive de la cornée, pouvant entraîner une vision floue, déformée et un astigmatisme irrégulier. Dans les formes avancées, des cicatrices cornéennes peuvent altérer davantage la vision. Un diagnostic précoce, une surveillance adaptée et les traitements disponibles permettent de limiter le risque de complications et d’améliorer la qualité visuelle.

AR :


### Maladies de la rétine — clé `retine`

#### 62. `retine.faq[0]`

> **Q :** Pourquoi un diabétique doit-il faire contrôler son fond d’œil ?
>
> **R :** Le diabète peut endommager progressivement les petits vaisseaux de la rétine et provoquer une rétinopathie diabétique, parfois sans aucun symptôme au début. Un examen régulier du fond d’œil permet de détecter précocement ces anomalies et de prévenir les complications pouvant entraîner une baisse de la vision.

AR :

#### 63. `retine.faq[1]`

> **Q :** L’examen de la rétine est-il douloureux ?
>
> **R :** Non, l’examen de la rétine est généralement indolore. Il peut être réalisé à l’aide d’un rétinographe ou par un examen du fond d’œil. Dans certains cas, des gouttes sont utilisées pour dilater les pupilles afin de mieux visualiser les différentes structures de la rétine.

AR :

#### 64. `retine.faq[2]`

> **Q :** Faut-il toujours dilater les pupilles pour examiner la rétine ?
>
> **R :** Non, pas systématiquement. Notre cabinet dispose d’un rétinographe permettant de photographier la rétine sans dilatation pupillaire dans de nombreuses situations. Cependant, une dilatation peut être nécessaire pour examiner plus complètement la rétine, notamment sa périphérie, ou rechercher certaines anomalies qui ne sont pas visibles sur les photographies.

AR :

#### 65. `retine.faq[3]`

> **Q :** Combien de temps dure l’effet des gouttes de dilatation ?
>
> **R :** L’effet des gouttes dure généralement plusieurs heures, selon le produit utilisé et la sensibilité du patient. Pendant cette période, la vision de près peut être floue et les yeux plus sensibles à la lumière. Il est préférable d’éviter de conduire tant que la vision n’est pas redevenue normale.

AR :

#### 66. `retine.faq[4]`

> **Q :** Peut-on avoir une maladie de la rétine sans ressentir de symptômes ?
>
> **R :** Oui. Certaines maladies rétiniennes, notamment la rétinopathie diabétique, peuvent évoluer silencieusement pendant plusieurs années. C’est pourquoi un suivi ophtalmologique régulier est essentiel, particulièrement chez les personnes diabétiques ou présentant des facteurs de risque.

AR :

_Non affichées (sans réponse) : « Qu’est-ce que la DMLA ? » — rien à traduire tant que la doctoresse n'a pas répondu._


### Glaucome — clé `glaucome`

#### 67. `glaucome.steps[1]`

> **Examen du nerf optique**
>
> Fond d’œil pour évaluation de la papille optique, OCT du nerf optique et champ visuel.

AR :


### Ophtalmologie pédiatrique — clé `'ophtalmologie-pediatrique'`

#### 68. `'ophtalmologie-pediatrique'.photoAlt` — à traduire avec la version arabe de l’affiche

> Enfant portant des lunettes, un œil caché par un cache-œil. Texte : « Le dépistage précoce permet de détecter tôt les troubles visuels chez l’enfant et d’assurer une prise en charge optimale. »

AR :

#### 69. `ophtalmologie-pediatrique.faq[0]`

> **Q :** À quel âge faire le premier examen ?
>
> **R :** Un examen des yeux peut être réalisé dès la naissance si nécessaire. Le dépistage visuel commence dès les premiers mois de vie, avec un examen recommandé entre 3 et 4 ans, même en l’absence de symptômes. En cas de strabisme, de reflet pupillaire anormal ou de suspicion de trouble visuel, il est important de consulter sans attendre.

AR :

#### 70. `ophtalmologie-pediatrique.faq[1]`

> **Q :** Mon enfant doit-il porter ses lunettes en permanence ?
>
> **R :** Cela dépend du trouble visuel et de la prescription de l’ophtalmologue. Dans certains cas, notamment en présence d’une amblyopie, d’un strabisme ou d’un défaut visuel important, le port permanent des lunettes est essentiel au bon développement de la vision.

AR :

#### 71. `ophtalmologie-pediatrique.faq[2]`

> **Q :** Les écrans abîment-ils les yeux des enfants ?
>
> **R :** Une utilisation prolongée des écrans peut provoquer une fatigue visuelle, une sécheresse oculaire et des troubles du sommeil. Le temps passé devant les écrans, particulièrement lorsqu’il remplace les activités en extérieur, est également associé à un risque accru de myopie. Il est recommandé de limiter les écrans, d’encourager les activités en plein air et de faire des pauses régulières.

AR :


### Échographie oculaire — clé `'echographie-oculaire'`

#### 72. `echographie-oculaire.steps[2]`

> **Durée**
>
> L’examen dure généralement entre 5 et 15 minutes, selon les structures à examiner et les mesures nécessaires.

AR :

#### 73. `echographie-oculaire.faq[0]`

> **Q :** L’échographie oculaire est-elle douloureuse ?
>
> **R :** Non, l’échographie oculaire est un examen indolore et non invasif. Elle peut être réalisée à travers la paupière fermée après instillation de gouttes anesthésiantes.

AR :

#### 74. `echographie-oculaire.faq[1]`

> **Q :** Faut-il une préparation particulière ?
>
> **R :** Non, aucune préparation particulière n’est nécessaire. L’examen peut être réalisé lors d’une consultation ophtalmologique.

AR :

#### 75. `echographie-oculaire.faq[2]`

> **Q :** Combien de temps dure l’examen ?
>
> **R :** L’échographie oculaire est un examen rapide, qui dure généralement entre 5 et 15 minutes, selon les structures à examiner et les mesures nécessaires.

AR :


### Laser — clé `laser`

#### 76. `laser.what` — tableau de 3 paragraphes

> Le laser est une technologie utilisée en ophtalmologie pour traiter certaines maladies de la rétine, du glaucome et des complications survenant après une chirurgie de la cataracte.
>
> Il permet d’agir de manière ciblée sur les structures de l’œil, généralement sans incision chirurgicale. Le type de laser utilisé dépend de la pathologie et de l’objectif du traitement.
>
> Un examen ophtalmologique approfondi est indispensable pour déterminer l’indication du laser.

AR :

#### 77. `laser.situations[0]` — nouveau champ ; puis retirer `hideSigns` en AR

> **Rétinopathie diabétique – Photocoagulation panrétinienne (PPR)**
>
> La PPR est un traitement au laser indiqué notamment dans certaines formes avancées de rétinopathie diabétique, caractérisées par l’apparition de vaisseaux sanguins anormaux sur la rétine. Elle permet de réduire le risque de complications graves, notamment les hémorragies intraoculaires et certaines formes de décollement de rétine.

AR :

#### 78. `laser.situations[1]`

> **Déchirures rétiniennes – Photocoagulation au laser**
>
> Lorsqu’une déchirure de la rétine présente un risque de décollement, le laser permet de créer une barrière cicatricielle autour de celle-ci. L’objectif est de limiter le passage de liquide sous la rétine et de réduire le risque de décollement rétinien.

AR :

#### 79. `laser.situations[2]`

> **Glaucome par fermeture de l’angle – Iridotomie périphérique au laser YAG**
>
> L’iridotomie consiste à réaliser une petite ouverture dans la périphérie de l’iris afin de faciliter la circulation de l’humeur aqueuse. Elle est notamment indiquée dans certaines situations de fermeture de l’angle iridocornéen ou d’angle étroit à risque, selon le mécanisme identifié.

AR :

#### 80. `laser.situations[3]`

> **Cataracte secondaire – Capsulotomie au laser YAG**
>
> Après une chirurgie de la cataracte, la capsule située derrière l’implant peut progressivement devenir opaque, entraînant une baisse de la vision. Le laser YAG permet de créer une ouverture dans cette capsule opacifiée afin de rétablir la transparence de l’axe visuel et d’améliorer la vision lorsque cette opacification est responsable de la gêne.

AR :

#### 81. `laser.stepsTitle`

> Comment se déroule une séance de laser ?

AR :

#### 82. `laser.steps[0]`

> **Consultation**
>
> Un examen ophtalmologique complet permet d’établir le diagnostic, de confirmer l’indication du laser et d’expliquer les bénéfices ainsi que les risques du traitement.

AR :

#### 83. `laser.steps[1]`

> **Préparation**
>
> Des gouttes sont instillées pour préparer l’œil. Selon le type de laser, elles permettent de dilater ou de contracter la pupille et d’anesthésier la surface oculaire.

AR :

#### 84. `laser.steps[2]`

> **Séance de laser**
>
> Le patient est installé devant un appareil spécifique. Le médecin dirige les impacts laser vers la zone à traiter, parfois à l’aide d’une lentille de contact. La séance dure généralement quelques minutes à plusieurs dizaines de minutes selon le traitement. Une gêne ou une douleur transitoire peut être ressentie, particulièrement lors de certaines photocoagulations rétiniennes.

AR :

#### 85. `laser.steps[3]`

> **Suivi**
>
> Un contrôle ophtalmologique est organisé selon le type de laser réalisé afin de vérifier l’efficacité du traitement et de rechercher d’éventuelles complications. Certaines pathologies peuvent nécessiter plusieurs séances ou des traitements complémentaires.

AR :

#### 86. `laser.faq[0]`

> **Q :** Le laser est-il douloureux ?
>
> **R :** La plupart des traitements au laser sont bien tolérés grâce à l’utilisation de gouttes anesthésiantes. Une légère gêne ou une sensation de picotement peut être ressentie. Cependant, certains traitements, notamment la photocoagulation panrétinienne (PPR), peuvent être plus douloureux. Le confort varie selon le type de laser et la sensibilité de chaque patient.

AR :

#### 87. `laser.faq[1]`

> **Q :** Combien de séances faut-il ?
>
> **R :** Le nombre de séances dépend de la maladie traitée et du type de laser utilisé. Une seule séance suffit généralement pour une iridotomie ou une capsulotomie au laser YAG. En revanche, la photocoagulation panrétinienne peut nécessiter plusieurs séances. Le traitement des déchirures rétiniennes est souvent réalisé en une séance, mais des séances complémentaires peuvent parfois être nécessaires.

AR :

#### 88. `laser.faq[2]`

> **Q :** Peut-on reprendre ses activités après la séance ?
>
> **R :** La plupart des patients peuvent reprendre progressivement leurs activités habituelles après un traitement au laser. Cependant, une vision floue temporaire, une sensibilité à la lumière ou une gêne oculaire peuvent survenir, notamment après une dilatation pupillaire. Il est recommandé d’éviter de conduire tant que la vision n’est pas redevenue normale et de respecter les consignes spécifiques données par l’ophtalmologue.

AR :


## 2. Nouvelle page « Rétinographie » — nouvelle clé `retinographie` (page AR à créer)

#### 89. `site.js → services (slug 'retinographie').ar` — nom dans le menu (remplace `ar: null`)

> Rétinographie

AR :

#### 90. `retinographie.name`

> Rétinographie

AR :

#### 91. `retinographie.label`

> Examen

AR :

#### 92. `retinographie.photoAlt`

> Rétinographe numérique iCare du cabinet

AR :

#### 93. `retinographie.card`

> La rétinographie est un examen rapide, indolore et non invasif qui permet de photographier le fond d’œil, notamment la rétine, la macula et le nerf optique.

AR :

#### 94. `retinographie.intro`

> Elle permet de dépister certaines maladies oculaires, de documenter les anomalies et de suivre leur évolution au fil du temps.

AR :

#### 95. `retinographie.whatTitle`

> Qu’est-ce que la rétinographie ?

AR :

#### 96. `retinographie.what` — tableau de 3 paragraphes

> La rétinographie est un examen rapide, indolore et non invasif qui permet de photographier le fond d’œil, notamment la rétine, la macula et le nerf optique.
>
> Elle permet de dépister certaines maladies oculaires, de documenter les anomalies et de suivre leur évolution au fil du temps.
>
> Grâce au rétinographe disponible au cabinet, cet examen peut être réalisé sans dilatation des pupilles dans de nombreuses situations.

AR :

#### 97. `retinographie.signsTitle`

> Quand est-elle prescrite ?

AR :

#### 98. `retinographie.signCards[0]`

> **Rétinopathie diabétique**
>
> Dépistage et surveillance des anomalies rétiniennes liées au diabète.

AR :

#### 99. `retinographie.signCards[1]`

> **DMLA**
>
> Détection et suivi de certaines anomalies de la macula.

AR :

#### 100. `retinographie.signCards[2]`

> **Glaucome**
>
> Photographie de la papille optique pour documenter et surveiller son aspect.

AR :

#### 101. `retinographie.signCards[3]`

> **Maladies vasculaires rétiniennes**
>
> Recherche d’hémorragies et d’autres anomalies visibles des vaisseaux rétiniens.

AR :

#### 102. `retinographie.signCards[4]`

> **Bilan ophtalmologique**
>
> Documentation de l’état du fond d’œil et comparaison des images au cours du suivi.

AR :

#### 103. `retinographie.stepsTitle`

> Comment se déroule l’examen ?

AR :

#### 104. `retinographie.steps[0]`

> **Préparation**
>
> Le patient est installé devant le rétinographe. Une dilatation des pupilles n’est pas nécessaire.

AR :

#### 105. `retinographie.steps[1]`

> **Prise des photographies**
>
> Le patient fixe une cible lumineuse pendant que l’appareil capture des images de la rétine. L’examen est rapide, sans contact avec l’œil et indolore.

AR :

#### 106. `retinographie.steps[2]`

> **Analyse des images**
>
> Les photographies sont analysées par l’ophtalmologue afin de rechercher d’éventuelles anomalies de la rétine, de la macula ou du nerf optique.

AR :

#### 107. `retinographie.steps[3]`

> **Après l’examen**
>
> Le patient peut généralement reprendre immédiatement ses activités habituelles. Selon les résultats, un examen complémentaire, notamment un OCT ou un fond d’œil après dilatation, peut être nécessaire.

AR :

#### 108. `retinographie.faq[0]`

> **Q :** Faut-il dilater les pupilles pour réaliser une rétinographie ?
>
> **R :** Pas systématiquement. Le rétinographe disponible au cabinet permet de photographier la rétine sans dilatation dans de nombreuses situations. Cependant, une dilatation peut être nécessaire pour obtenir de meilleures images ou réaliser un examen plus complet du fond d’œil.

AR :

#### 109. `retinographie.faq[1]`

> **Q :** La rétinographie est-elle douloureuse ?
>
> **R :** Non, la rétinographie est un examen indolore, rapide et sans contact avec l’œil. Le patient doit simplement fixer une cible lumineuse pendant la prise des photographies.

AR :

#### 110. `retinographie.faq[2]`

> **Q :** Combien de temps dure l’examen ?
>
> **R :** La prise des photographies ne dure généralement que quelques minutes. La durée peut être prolongée si une dilatation pupillaire est nécessaire.

AR :

#### 111. `retinographie.faq[3]`

> **Q :** Peut-on conduire après une rétinographie ?
>
> **R :** Oui, généralement, si l’examen est réalisé sans dilatation. En revanche, si des gouttes dilatatrices sont utilisées, il est préférable de ne pas conduire tant que la vision n’est pas redevenue normale.

AR :

#### 112. `retinographie.faq[4]`

> **Q :** La rétinographie remplace-t-elle l’examen du fond d’œil ?
>
> **R :** Non, pas systématiquement. Elle permet de photographier et de surveiller certaines structures de la rétine, mais un examen après dilatation peut être nécessaire, notamment pour explorer la périphérie rétinienne.

AR :

#### 113. `retinographie.ctaTitle`

> Un examen vous a été prescrit ?

AR :

#### 114. `retinographie.meta.title` — ≤ 65 caractères

> Rétinographie à Fès – Cabinet Dr Elaouni Rajae

AR :

#### 115. `retinographie.meta.description` — 70 à 160 caractères

> Rétinographie au cabinet du Dr Elaouni Rajae à Fès : photographie du fond d’œil, souvent sans dilatation des pupilles. Tél. 05 32 39 18 18.

AR :

_`doctor` : reprendre la constante AR existante `SFO`._


## 3. Nouvelle page « OCT » — nouvelle clé `oct` (page AR à créer)

#### 116. `site.js → services (slug 'oct').ar` — nom dans le menu (remplace `ar: null`)

> OCT

AR :

#### 117. `oct.name`

> OCT

AR :

#### 118. `oct.label`

> Examen

AR :

#### 119. `oct.photoAlt`

> Dr Elaouni Rajae devant un examen OCT

AR :

#### 120. `oct.card`

> L’OCT (Tomographie par Cohérence Optique) est un examen rapide, indolore et non invasif qui permet d’obtenir des images en coupe très détaillées des différentes structures de l’œil.

AR :

#### 121. `oct.intro`

> Il permet de détecter précocement certaines anomalies, parfois avant l’apparition de symptômes, et de suivre leur évolution avec précision.

AR :

#### 122. `oct.whatTitle`

> Qu’est-ce que l’OCT ?

AR :

#### 123. `oct.what` — tableau de 3 paragraphes

> L’OCT (Tomographie par Cohérence Optique) est un examen rapide, indolore et non invasif qui permet d’obtenir des images en coupe très détaillées des différentes structures de l’œil, notamment de la rétine, de la macula et du nerf optique.
>
> Il permet de détecter précocement certaines anomalies, parfois avant l’apparition de symptômes, et de suivre leur évolution avec précision.
>
> Cet examen peut être réalisé sans contact avec l’œil et, dans de nombreuses situations, sans dilatation des pupilles.

AR :

#### 124. `oct.signsTitle`

> Quand est-il prescrit ?

AR :

#### 125. `oct.signCards[0]`

> **DMLA**
>
> Diagnostic et surveillance des anomalies maculaires, notamment la présence de liquide rétinien.

AR :

#### 126. `oct.signCards[1]`

> **Rétinopathie diabétique**
>
> Dépistage et suivi de l’œdème maculaire diabétique.

AR :

#### 127. `oct.signCards[2]`

> **Glaucome**
>
> Analyse de l’épaisseur des fibres nerveuses rétiniennes (RNFL) et des cellules ganglionnaires pour aider au diagnostic et au suivi.

AR :

#### 128. `oct.signCards[3]`

> **Maladies de la macula**
>
> Diagnostic et surveillance des membranes épirétiniennes, trous maculaires et autres anomalies maculaires.

AR :

#### 129. `oct.signCards[4]`

> **Baisse de vision inexpliquée**
>
> Recherche d’anomalies structurelles de la rétine ou du nerf optique.

AR :

#### 130. `oct.stepsTitle`

> Comment se déroule l’examen ?

AR :

#### 131. `oct.steps[0]`

> **Préparation**
>
> Le patient est installé devant l’appareil OCT. Une dilatation des pupilles n’est généralement pas nécessaire.

AR :

#### 132. `oct.steps[1]`

> **Acquisition des images**
>
> Le patient fixe une cible lumineuse pendant que l’appareil réalise des images en coupe des structures oculaires. L’examen est rapide, sans contact avec l’œil et indolore.

AR :

#### 133. `oct.steps[2]`

> **Analyse des résultats**
>
> Les images sont analysées par l’ophtalmologue afin de rechercher d’éventuelles anomalies de la rétine, de la macula ou du nerf optique et de comparer les résultats aux examens précédents.

AR :

#### 134. `oct.steps[3]`

> **Après l’examen**
>
> Le patient peut reprendre immédiatement ses activités habituelles. Selon les résultats, des examens complémentaires ou une surveillance régulière peuvent être nécessaires.

AR :

#### 135. `oct.faq[0]`

> **Q :** L’OCT est-il douloureux ?
>
> **R :** Non, l’OCT est un examen totalement indolore, non invasif et sans contact avec l’œil. Il utilise un faisceau lumineux pour obtenir des images détaillées de la rétine et du nerf optique.

AR :

#### 136. `oct.faq[1]`

> **Q :** Faut-il dilater les pupilles pour un OCT ?
>
> **R :** Pas systématiquement. L’OCT peut généralement être réalisé sans dilatation. Cependant, des gouttes dilatatrices peuvent être nécessaires dans certaines situations pour améliorer la qualité des images.

AR :

#### 137. `oct.faq[2]`

> **Q :** Combien de temps dure un OCT ?
>
> **R :** L’examen dure généralement entre 5 et 10 minutes, selon les zones à analyser et la coopération du patient.

AR :

#### 138. `oct.faq[3]`

> **Q :** Peut-on conduire après un OCT ?
>
> **R :** Oui, si aucune dilatation pupillaire n’a été réalisée et que votre vision le permet. En cas de dilatation, il est recommandé d’attendre le retour à une vision normale avant de conduire.

AR :

#### 139. `oct.faq[4]`

> **Q :** L’OCT présente-t-il des contre-indications ?
>
> **R :** L’OCT est un examen très sûr, utilisant de la lumière et non des rayons X. Il ne présente pas de contre-indication majeure connue. Certaines situations, comme une opacité importante des milieux oculaires ou une difficulté à fixer, peuvent toutefois limiter la qualité des images.

AR :

#### 140. `oct.ctaTitle`

> Un examen vous a été prescrit ?

AR :

#### 141. `oct.meta.title` — ≤ 65 caractères

> OCT (tomographie par cohérence optique) à Fès – Dr Elaouni

AR :

#### 142. `oct.meta.description` — 70 à 160 caractères

> OCT au cabinet du Dr Elaouni Rajae à Fès : images en coupe de la rétine, de la macula et du nerf optique, sans contact. Tél. 05 32 39 18 18.

AR :

_`doctor` : reprendre la constante AR existante `SFO`._


## 4. Page Équipements — `ar/equipements/index.html`

#### 143. `ar/equipements · bloc « Autoréfractomètre, phoroptère et écran d’acuité visuelle » · titre + texte` — nouveau bloc

> **Autoréfractomètre, phoroptère et écran d’acuité visuelle**
>
> Des équipements complémentaires pour une évaluation précise de la vision.
>
> L’autoréfractomètre permet d’obtenir une première mesure objective des défauts visuels : myopie, hypermétropie et astigmatisme.
>
> Le phoroptère permet d’affiner cette mesure en testant différentes corrections afin de déterminer les verres les mieux adaptés au patient.
>
> L’écran d’acuité visuelle permet d’évaluer la capacité à distinguer les lettres, chiffres ou symboles à différentes tailles et de vérifier l’amélioration de la vision avec la correction.
>
> Ensemble, ces équipements contribuent à un bilan visuel complet et personnalisé, pour une correction optique adaptée aux besoins de chaque patient.

AR :

#### 144. `ar/equipements · alt image autorefractometre`

> Autoréfractomètre Huvitz du cabinet

AR :

#### 145. `ar/equipements · alt image phoropteur`

> Phoroptère du cabinet, devant le fauteuil d’examen

AR :

#### 146. `ar/equipements · alt image phoropteur-console`

> Console de commande du phoroptère Huvitz

AR :

#### 147. `ar/equipements · alt image ecran-acuite-visuelle`

> Écran d’acuité visuelle fixé au mur de la salle d’examen

AR :

#### 148. `ar/equipements · bloc « Lampe à fente » · titre + texte` — remplace le bloc AR « المصباح الشقي وجهاز قياس الانكسار »

> **Lampe à fente**
>
> La lampe à fente est un microscope qui permet d’examiner les différentes structures de l’œil avec un fort grossissement et un éclairage précis.
>
> Elle permet notamment d’observer la cornée, la conjonctive, l’iris et le cristallin, afin de détecter des anomalies telles que les inflammations, les infections ou la cataracte.
>
> Grâce à des lentilles spécifiques, elle permet également d’examiner le fond de l’œil.

AR :

#### 149. `ar/equipements · alt image lampe-a-fente`

> Lampe à fente Huvitz du cabinet

AR :

#### 150. `ar/equipements · alt image lampe-a-fente-volk`

> Lentilles Volk utilisées avec la lampe à fente pour examiner le fond de l’œil

AR :

#### 151. `ar/equipements · bloc « Le tonomètre – Mesure de la pression intraoculaire » · titre + texte` — nouveau bloc

> **Le tonomètre – Mesure de la pression intraoculaire**
>
> Le tonomètre permet de mesurer la pression à l’intérieur de l’œil, un examen essentiel dans le dépistage et le suivi du glaucome.
>
> Grâce à la pachymétrie, qui mesure l’épaisseur de la cornée, notre équipement permet également d’obtenir une estimation ajustée de la pression intraoculaire, afin d’affiner l’interprétation des résultats.

AR :

#### 152. `ar/equipements · alt image tonometre`

> Tonomètre du cabinet pour la mesure de la pression intraoculaire

AR :

#### 153. `ar/equipements · « Examens réalisés au cabinet » + liens des blocs rétinographe / OCT` — mêmes noms que dans le menu (pages AR à créer)

> Rétinographie
>
> OCT

AR :


## 5. Page Le cabinet — `ar/cabinet/index.html`

#### 154. `ar/cabinet · section Accès · alt de la photo façade` — si la photo est affichée en AR (plaque en français) ; remplace l’encadré « [À DEMANDER] »

> Entrée de la Résidence Oumnia, avec la plaque du cabinet du Dr Elaouni Rajae (3ème étage, bureau N°17)

AR :

#### 155. `ar/cabinet · galerie · alt + légende cabinet-deco` — remplace l’alt et la légende AR provisoires

> Canapé vert et décoration murale en lettres E, inspirée des tests de vision
>
> Légende : Décoration du cabinet

AR :


## 6. Accueil — `ar/index.html`

#### 156. `ar/index · logo « Formation et affiliations » · alt` — si le logo est affiché en AR (texte français sur le logo)

> CHU Hassan II – Fès, Service d’ophtalmologie

AR :


## 7. Alt AR provisoires à faire valider (déjà en arabe, `TODO AR`)

#### 157. `cataracte.photosAlt[0]` — AR actuel : الدكتورة العوني رجاء أمام المجهر الجراحي أثناء عملية جراحة الجلالة

> Dr Elaouni Rajae au microscope opératoire pendant une chirurgie de la cataracte

AR :

#### 158. `cataracte.photosAlt[1]` — AR actuel : الدكتورة العوني رجاء بلباس غرفة العمليات أمام المجهر الجراحي وجهاز الفاكو

> Dr Elaouni Rajae en tenue de bloc opératoire, devant le microscope et la plateforme de phacoémulsification

AR :

#### 159. `laser.photosAlt[0]` — AR actuel : رسم توضيحي لمقطع من العين: شعاع ليزر يعبر العدسة حتى الشبكية

> Schéma en coupe d’un œil : un faisceau laser traverse le cristallin jusqu’à la rétine

AR :

#### 160. `laser.photosAlt[1]` — AR actuel : مريض أمام المصباح الشقي أثناء علاج بالليزر، مع عدسة موضوعة على العين

> Patient installé à la lampe à fente pendant un traitement au laser, une lentille posée sur l’œil

AR :

#### 161. `chirurgie-refractive.photoAlt` — AR actuel : مريضة مستلقية تحت جهاز الليزر أثناء عملية الجراحة الانكسارية

> Patiente allongée sous le laser pendant une chirurgie réfractive

AR :

#### 162. `keratocone.photoAlt` — AR actuel : عين من الجانب: القرنية رقيقة وتأخذ شكلاً مخروطياً

> Œil vu de profil : la cornée, amincie, prend une forme de cône

AR :

#### 163. `lentilles-de-contact.photoAlt` — AR actuel : عدسة لاصقة على طرف الإصبع أمام المصباح الشقي

> Lentille de contact posée sur le bout du doigt, devant une lampe à fente

AR :


---

**Total : 163 blocs.**
