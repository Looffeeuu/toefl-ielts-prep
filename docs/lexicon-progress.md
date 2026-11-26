# 全库音标与释义核对进度

更新：2026-11-25。总计 9075 词。

| 项目 | 已核对 | 尚待核对 |
| --- | ---: | ---: |
| 释义与词性 | 8473 | 602 |
| 英美音与主要分读 | 8471 | 604 |
| 两项均完成 | 8471 | 604 |

每词分别保存来源和日期，不能用核对音标代替核对释义。完整状态和接续队列见 [lexicon-progress.json](lexicon-progress.json)。优先处理缺失、截断、词性矛盾和用法标记，再按字母顺序推进。未找到可靠来源的条目保持待核对，不推测填充。

## 批次 001

24 词：abnormal、AIDS、bend、blonde、blur、bound、brief、clear、close、counter、cross、cut、cutting、desert、double、draw、equal、even、executive、fair、fancy、fit、flat、frequent。逐词依据、修订原因和音标在 js/lexicon-review-001.js。英文例句为原创，不是词典引文。

本轮核对常用现代学习义，不是专业义项的穷尽收录。现有搭配、同义替换和记忆线索不因本轮核对自动获得词典背书。

复查命令：

```text
node tools/audit_definitions.js --write
node tools/check_pronunciations.js --write
node tools/lexicon_progress.js
```

下一批队列前 30 词：accidents、accommodations、account for、accountants、actions、activities、adults、advantages、advertisements、affairs、agencies、animals、antibiotics、approaches、approaching、areas、articles、assignments、attacks、attempts、automated、beds、beginners、belts、benefits、bicycles、birds、booklist、books、bring about。

## 批次 002

完成 100 词：abandon、abandonment、abate、abbreviate、abbreviation、abdicate、abduct、abhor、abhorrent、abide、ability、abject、ablaze、ablution、aboard、abolish、abolition、abolitionist、aboriginal、abort、abortion、abortive、abound、abrasion、abrasive、abridge、abroad、abrupt、absence、absent、absentee、absenteeism、absolute、absolutely、absolve、absorb、absorption、abstain、abstinence、abstract、abstraction、abstruse、absurd、abundance、abundant、abundantly、abuse、abut、academic、academician、academy、accelerate、acceleration、accentuate、accessibility、accessible、accessory、accident、accidental、accidentally、acclaim、accommodate、accommodation、accompaniment、accompany、accomplice、accomplish、accomplishment、accord、accordion、accost、account、accountant、accredit、accumulate、accumulation、accuracy、accurate、accusation、accuse、accuser、accustom、achieve、achievement、acid、acidic、acidity、acknowledge、acme、acquaint、acquaintance、acquire、acquisition、acquisitive、acquit、acre、acrid、acrimony、acronym、action。

待复核：acoustical。查到 Collins 释义与美音，但未找到可同时照录的英美 IPA；保留待复核。 [已查资料](https://www.collinsdictionary.com/dictionary/english/acoustical)。不计入完成数。

## 批次 003

完成 100 词：activate、active、actively、activity、actor、actual、actually、actuate、acumen、acupuncture、acute、adage、adamant、adapt、adaptable、adaptation、adaptive、addict、addictive、addition、additional、additive、addle、adept、adequate、adhere、adherence、adhesive、adjacent、adjoin、adjourn、adjunct、adjust、adjustment、administer、administrate、administration、administrative、administrator、admirable、admiration、admire、admission、admit、admittedly、admonish、adobe、adolescence、adolescent、adopt、adoption、adore、adorn、adornment、adroit、adult、adulteration、advance、advancement、advent、adventure、adventurer、adverse、adversely、adversity、advertise、advertisement、advice、advisable、advise、advocate、aerial、aesthetic、aesthetical、affable、affair、affect、affection、affectionate、affective、affiliate、affinity、affirm、affix、afflict、affliction、affluence、affluent、afford、age、agency、agenda、agent、aggravate、aggregate、aggregation、aggression、aggressive、aghast、agile。



## 批次 004

完成 100 词：agility、agitate、agitation、aglow、agonize、agony、agrarian、agreeable、agreement、agriculture、ailment、aim、air、airborne、aircraft、airport、aisle、ajar、akin、alarm、albeit、album、alchemy、alder、alert、algae、algebra、alien、alienate、alight、alignment、alike、alkali、all、allegation、allege、allegiance、allegory、allergic、allergy、alleviate、alley、alliance、alligator、alliteration、allocate、allot、allowance、alloy、allude、allure、allusion、ally、aloft、alone、alongside、aloof、alphabetical、alter、alteration、alternate、alternately、alternation、alternative、altitude、altruism、aluminium、aluminum、amalgamate、amateur、amaze、amazement、ambassador、ambience、ambiguity、ambition、ambivalence、ambivalent、amble、ambulance、ambush、amenable、amend、amendment、amenity、amiable、amicable、amid、amidst、ammunition、amnesia、amnesty、amount、amphibian、ample、amplification、amplify、amuse、analogy、analytical。



## 批次 005

完成 100 词：analyze、anarchist、anatomy、ancestor、ancestral、ancestry、anchor、ancient、anecdotal、anecdote、anesthesia、anesthetic、anger、angle、angry、anguish、angular、animal、animated、animosity、ankle、annex、annihilate、anniversary、annotate、announce、announcement、announcer、annoy、annoying、annual、annually、annuity、annul、anomalous、anomaly、anonymous、antagonism、antagonist、antagonize、antarctic、Antarctica、antecedent、antedate、anthem、anthology、anthropology、antibiotic、anticipate、anticipation、antipathy、antiquate、antiquated、antique、antiquity、antiseptic、antonym、anxiety、anxious、anyhow、apartment、apathetic、ape、aperture、apex、apologetic、apologize、apology、apostasy、apostrophe、appall、apparatus、apparel、apparent、appeal、appealing、appear、appearance、appendix、appetite、applaud、appliance、applicant、application、applied、apply、appoint、appointment、apportion、appraisal、appraise、appreciable、appreciate、appreciation、apprehend、apprehension、apprentice、appropriation、approach、appropriate。



## 批次 006

完成 100 词：approval、approve、approximate、approximately、April、apt、aptitude、aptly、aquamarine、aquarium、aquatic、arable、arbitrary、arbitration、arbitrator、arboreal、arc、arch、archaeological、archaeology、archaic、archipelago、architect、architectural、architecture、archive、arctic、ardent、ardor、arduous、area、arena、argue、argument、aria、arid、arise、aristocracy、aristocrat、arithmetic、armament、armor、armored、armory、armour、arms、army、aroma、aromatic、arouse、arraign、arrange、arrangement、array、arrest、arrival、arrogance、arrogant、arsenal、art、artery、arthritis、article、articulate、artifact、artificial、artillery、artisan、artistic、as、ascend、ascent、ascertain、ascetic、ascribe、ashamed、Asia、aspect、aspersion、asphalt、aspiration、aspire、aspirin、assail、assassin、assassinate、assassination、assault、assemblage、assemble、assembly、assert、assess、assessment、asset、assiduous、assign、assignment、assimilate、assist。



## 批次 007

完成 100 词：assistance、assistant、assistantship、associate、association、assorted、assortment、assuage、assume、assumption、assurance、assure、assuredly、asteroid、astonish、astonished、astonishing、astound、astounding、astronomer、astronomical、astronomy、astute、asylum、asymmetrical、atheism、atheist、Athens、athlete、atlas、atmosphere、atmospheric、atom、atomic、atomization、atrophy、attach、attached、attachment、attack、attain、attainment、attempt、attend、attendance、attendant、attention、attentive、attire、attorney、attract、attraction、attractive、attribute、attrition、auction、audacious、audible、audience、audio、audit、audition、auditor、auditorium、auditory、auger、augment、august、aura、aurora、auspices、auspicious、austerity、Australia、Australian、authentic、authenticate、author、authoritative、authority、authorize、autobiographical、autobiography、autocrat、automatic、automation、automobile、automotive、autonomous、autonomy、autopsy、auxiliary、avail、available、avalanche、avant-garde、avarice、avaricious、avenue、average。



## 批次 008

完成 100 词：averse、aversion、avert、aviation、aviator、avid、avocation、avocational、avoid、avoidable、avoidance、avouch、avow、award、aware、awareness、awe、awful、awkward、awkwardly、axe、axis、azure、baboon、baby-sitter、bachelor、back、backbone、backdrop、background、backpack、backward、bacon、bacteria、bacterium、badge、badger、badminton、baffle、baggage、bait、bake、balance、balanced、balcony、bald、baldness、balk、ballet、balloon、balloonist、ballot、ballroom、balmy、bamboo、ban、band、bandage、bandanna、bandit、bandleader、bandmaster、bang、banish、bank、banker、banking、bankrupt、bankruptcy、banner、banquet、bar、barb、barbarian、barbecue、barber、bare、barely、bargain、barge、bark、barn、barometer、baroque、barrel、barren、barrenness、barricade、barrier、barter、baseball、basement、bashful、basic、basin、basis、bask、baste、batch、bath。



## 批次 009

完成 100 词：bathe、bathroom、batter、battery、battle、bay、beach、beacon、bead、beaded、beak、beam、bean、bear、beard、bearing、beast、beat、beautiful、beauty、beaver、become、becoming、bedeck、bedrock、bedroom、bedsit、beforehand、befuddle、beg、beget、beginning、begrudge、beguile、behalf、behave、behavior、behaviour、belie、belief、believer、belittle、belligerent、bellows、belly、belong、beloved、below、belt、beneath、benefactor、beneficial、beneficiary、benefit、benevolent、benign、bent、bequest、berate、bereave、Berlin、berth、beset、besides、besiege、bespeak、best、bestow、bet、betoken、betray、better、beverage、bewilder、bias、bible、bibliography、bicameral、bicker、bicycle、bid、bidding、bigoted、bigotry、bilateral、bilingual、bill、billion、bind、biochemistry、biographer、biography、biological、biologist、biology、Birmingham、birth、bison、bite、bitter。



## 批次 010

完成 100 词：bitterness、bitumen、bizarre、black、blackmail、blacksmith、blade、blame、bland、blank、blanket、blast、blaze、blazing、bleach、bleak、bleed、blemish、blend、bless、blessing、blind、blink、bliss、blizzard、bloc、block、blond、blood、bloom、blossom、blot、blouse、blow、blues、bluff、blunder、blunt、blush、board、boarder、boardinghouse、boast、boastful、boat、bodily、boil、bold、bolster、bolt、bombastic、bonanza、bond、bondage、bonus、book、bookcase、booking、bookkeeper、booklet、breach、bookshelf、bookshop、boom、boon、boost、boot、booth、border、bore、boredom、boring、botanical、botany、bother、boulder、bounce、boundary、boundless、bounty、bouquet、bow、bowel、bowl、bowlegged、bowling、bowls、boycott、brace、bracket、brag、braid、brain、brake、branch、brand、brandish、brass、bravado、brawl。

待复核：booklist。已找到 Collins 的 book list 释义，但尚未找到可照录的完整英美 IPA，暂不计入完成。 [已查资料](https://www.collinsdictionary.com/us/dictionary/english/book-list)。不计入完成数。

## 批次 011

完成 100 词：break、breakdown、breakfast、breakthrough、breakup、breath、breathe、breathing、breathless、breathtaking、breed、breeding、breeze、brew、bribe、brick、bridge、briefcase、brighten、brilliance、brilliant、brilliantly、brim、bring、brink、briny、brisk、briskness、Bristol、Britain、British、brittle、broad-brimmed、broadcast、broaden、brochure、bronze、brood、brook、brown、brownish、browse、bruise、brutal、bubble、buck、bucket、buckle、bud、buddy、budge、budget、buffet、bug、buggy、bugle、building、bulb、bulge、bulk、bulky、bull、bulletin、bully、bumblebee、bump、bumper、bunch、bundle、bungalow、bunk、buoyant、burden、burdensome、bureaucracy、burgeon、burger、burglar、burial、burning、burnish、burrow、burst、bus、bush、business、bust、bustle、butcher、butt、butter、butterfly、buzz、buzzer、by-product、bypass、byword、cab、cabal、cabin。



## 批次 012

完成 100 词：cabinet、cabinetmaker、cable、cadence、cafe、cafeteria、calamity、calcium、calculate、calculation、calculator、calendar、caliber、calibration、calibre、call、callous、calm、calorie、Cambridge、camel、camera、camouflage、camp、campaign、campus、can、Canadian、canal、cancel、cancellation、candid、candidate、candle、cane、cannibalism、cannon、canny、canoe、canopy、canteen、canter、canvas、canyon、cap、capability、capable、capacious、capacity、cape、capillary、capital、capricious、capsize、capsule、caption、captious、captivate、captive、captivity、capture、carapace、carat、carbohydrate、carbon、carcase、carcass、card、cardiac、cardinal、care、career、cash、careful、careless、carelessly、caress、cargo、caricature、carnage、carnal、carnival、carnivore、carnivorous、carpenter、carpet、carping、carriage、carrier、carrion、carrot、carry、cart、carton、cartoon、carve、carver、carving、cascade、case。

历史待复核：careerism，已在批次 065 完成核对。原记录：已查到 Collins 释义和美音，但尚未找到可照录的完整英美 IPA；保留待核对，不计入完成。 [此前资料](https://www.collinsdictionary.com/dictionary/english/careerism)。

## 批次 013

完成 100 词：cashier、cassette、cast、cast-iron、caste、castigate、casting、castle、casual、casualty、cataclysm、catalog、catalogue、catalyst、catalyze、catastrophe、catch、catching、categorical、categorize、category、cater、catering、caterpillar、cathedral、catholic、cattle、cause、caustic、caution、cautious、cautiously、cave、cavern、cavity、CD、CD-ROM、cease、ceaseless、cedar、ceiling、celebrate、celebrated、celebrity、celestial、cell、cellar、cellist、cello、cellular、cellulose、celsius、cement、cemetery、censor、censure、census、centenary、centennial、center、centigrade、central、centre、century、ceramic、ceramics、cereal、ceremonial、ceremonious、ceremony、certainty、certificate、certify、cession、chafe、chagrin、chair、chalk、challenge、challenging、chamber、champagne、champion、championship、chance、chancellor、channel、chant、chaos、chaotic、chapel、chapter、character、characteristic、characterize、charcoal、charge、charisma、charitable、charity。



## 批次 014

完成 100 词：predominantly、ambiguous、chronological、civilization、classify、cognitive、coincide、collide、colony、comet、commerce、commission、commodity、compensate、component、composition、comprehensive、compress、comprise、condense、conformity、conquest、conscious、consensus、consequence、considerable、constitute、constraint、consumption、contour、contribute、controversy、conventional、cooperate、cosmic、criterion、crucial、crude、crust、cue、currency、curriculum、decline、decompose、demographic、dense、density、depict、deposit、deprive、derive、diameter、dilemma、diminish、disperse、distinct、distinguish、distribute、diverse、diversity、document、domesticate、dominate、dormant、drought、dynasty、eclipse、ecosystem、elaborate、emergence、emit、empathy、emphasize、empire、enhance、entrepreneur、equator、era、erosion、eruption、essential、estimate、evidence、evoke、evolve、excavate、explicit、exploit、extensive、extinct、facade、facilitate、factor、feasible、feedback、fertile、flexible、flourish、fluctuate、forage。

历史待复核：ruins，已在批次 016 完成核对。原记录：已找到 ruin 的释义与原形音标，尚未取得 ruins 自身完整英美 IPA，保留待核对。 [此前资料](https://dictionary.cambridge.org/dictionary/english/ruin)。

## 批次 015

完成 100 词：fossil、fracture、framework、fresco、friction、frustrate、fundamental、fusion、galaxy、genre、glacier、gradual、gravity、habitat、habituation、hence、heritage、hibernate、hierarchy、hinder、humid、hypothesis、illustrate、immigrant、impede、implicit、improvise、incentive、indicate、indigenous、industrialization、inevitable、infer、inflation、infrastructure、inhabit、inhibit、innate、innovative、inscription、instinct、intense、intricate、intuition、irrigation、labor、landform、larva、layer、legislation、literacy、luminous、magnitude、maintain、manuscript、masterpiece、meander、mechanism、mechanize、medieval、medium、memorize、merchant、merely、meteorite、migrate、mimic、mineral、modify、molten、momentum、monopoly、monument、moreover、motif、motivation、mural、mutation、narrative、nebula、nevertheless、nocturnal、nomadic、notably、nurture、nutrient、obstacle、offspring、orbit、organism、origin、ornament、paradox、parasite、particle、patron、peasant、peer、perceive、perception。

历史待复核：ruins，已在批次 016 完成核对。原记录：已找到 ruin 的释义与原形音标，尚未取得 ruins 自身完整英美 IPA，保留待核对。 [此前资料](https://dictionary.cambridge.org/dictionary/english/ruin)。

## 批次 016

完成 109 词：ruins、phenomenon、photosynthesis、pigment、plateau、plausible、pollinate、porous、portrait、portray、potential、pottery、precede、precipitation、predator、predominant、prehistoric、prey、primitive、profound、prolific、prominent、proportion、prosperity、radiation、rapid、recall、recession、reflect、regulate、reinforce、relic、remarkable、render、renowned、replicate、resemble、reservoir、retain、reveal、revenue、revolution、rigid、ritual、rotate、rudimentary、rural、satellite、saturate、scarce、sculpture、sediment、sequence、settler、shortage、significant、socialize、sophisticated、sparse、specialize、species、spectrum、speculate、spontaneous、stable、stagnant、stimulus、strata、striking、submerge、subsidy、substantial、subtle、surplus、sustain、symbiosis、symmetry、tariff、tectonic、tendency、terrain、textile、thereby、thrive、topography、trait、transaction、transition、tribe、trigger、undergo、undermine、uniform、urban、utilize、vapor、variation、vegetation、velocity、verify、viable、virtually、vivid、volcanic、vulnerable、wage、welfare、whereas、yield。按用户要求，本批一次完成核心精编剩余109词。



## 批次 017

完成 100 词：consistently、flame、flavour、innocent、lean、major、mate、mean、narrator、pet、pilot、plain、plate、poll、preserve、process、pull、rank、rough、routinely、schedule、smart、snap、spare、split、spot、steep、still、surface、suspect、swell、tail、till、traditionally、upset、weather、well、access、accounting、address、advanced、amazing、ambitious、analysis、chart、charter、check、chef、chest、chief、chill、chip、choice、choose、chop、Christian、chronic、chunk、circle、circuit、circumstance、cite、citizenship、civic、civil、civilian、claim、clay、clean、clerk、cliff、climate、cling、clinic、clinical、clip、clothing、clue、cluster、coach、coalition、coat、coin、collaboration、collapse、colleague、collective、colonial、combination、combine、comedy、commander、comment、commercial、commissioner、commit、commitment、committee、communicate、communication。核心精编完成后，转入托福高频；优先核对结构标记异常及多词性条目。



## 批次 018

完成 100 词：community、companion、company、comparable、compare、compassion、compel、compensation、compete、competition、complain、complaint、complete、complex、complexity、complicated、complication、comply、compose、compound、compromise、concede、conceive、concept、conception、concerned、concerning、concert、conclude、concrete、condemn、condition、conduct、conference、confess、confession、confidence、confident、confirm、conflict、confront、confuse、confusion、congress、congressional、connect、connection、conscience、consciousness、consecutive、consequently、conservation、Conservative、consider、considerably、consideration、consist、consistency、consistent、conspiracy、constant、constantly、constitution、constitutional、construct、construction、consult、consultant、consume、consumer、contact、contain、container、contemplate、contemporary、contend、content、context、continent、continuous、contract、contractor、contrast、controversial、convenience、convention、conversation、conversion、convert、convey、convict、conviction、convince、convinced、cooperation、cooperative、coordinate、cope、copy、cord。托福高频接续批次；核对多词性、多义及同形异音，并保留来源与语域说明。



## 批次 019

完成 100 词：corn、correct、corridor、corruption、costume、cotton、counsel、counseling、counselor、counterpart、couple、court、cover、coverage、crack、craft、crash、crawl、crazy、credit、creek、crew、critic、critical、critique、crowd、cruel、crush、crystal、Cuban、culture、cure、curiosity、curious、current、currently、curtain、curve、custom、customer、dam、dangerous、date、dawn、dead、deadly、deal、dealer、debate、debris、debt、decent、decide、deck、declare、decorate、decrease、dedicate、deem、defeat、defend、defense、defensive、deficit、definitely、definition、delay、deliberately、delicate、delicious、democracy、democrat、demonstrate、demonstration、deny、depart、departure、dependent、depressed、depression、deputy、descend、deserve、design、desire、desperate、desperately、dessert、destination、destruction、detect、detective、determination、determine、devastating、develop、device、devise、devote、diagnose。托福高频接续批次；核对多词性、多义、地区义及英美主读音，并保留来源与语域说明。



## 批次 020

完成 100 词：diagnosis、dialogue、dictate、diet、dignity、dimension、diplomatic、direct、disappointment、disaster、discipline、discount、discourage、discourse、discrimination、dismiss、display、dispute、dissolve、distance、distant、distinction、distinctive、distract、distribution、district、disturb、divide、division、divorce、doctrine、documentary、doll、domain、domestic、dominant、donate、donation、donor、dot、doubt、down、downtown、draft、drag、drain、drama、dramatic、dramatically、drawer、drawing、drift、drill、due、dumb、dump、dynamic、dynamics、eager、earthquake、echo、ecological、economic、economics、edge、education、effect、effective、effectiveness、efficiency、efficient、elbow、election、elegant、element、elementary、elevator、eligible、eliminate、elite、embrace、emerge、emission、emotion、emotional、emphasis、employ、employee、employer、empty、enable、enact、encounter、encourage、endless、endorse、endure、engage、enormous、enroll。托福高频接续批次；核对多词性、多义、主要分读和地区用法，保留逐词来源。



## 批次 021

完成 100 词：enterprise、entertain、entertainment、enthusiasm、entitle、entitled、entity、entrance、entry、envision、epidemic、episode、equality、equation、equip、equipment、equivalent、error、escape、essence、estate、ethics、ethnic、evaluate、eventually、evident、evolution、exact、exceed、excellent、exception、excessive、exchange、excitement、exciting、exclude、exclusive、exclusively、excuse、execute、execution、exhaust、exhibit、exhibition、exist、exit、exotic、expand、expansion、expedition、experienced、expertise、explode、exploration、explore、expose、exposure、extend、extended、extension、extent、external、extract、extraordinary、fabric、face、facility、faculty、fade、faint、fairly、faith、fame、fantastic、fantasy、fascinating、fashion、fatal、fatigue、fault、favorable、federal、feed、feminist、festival、fiber、fiction、fierce、figure、file、filter、final、finance、financial、fine、finish、firm、fist、fitness、fixed。托福高频接续批次；核对多义、多词性、同形异音和地区用法，保留逐词来源与原创例句。



## 批次 022

完成 100 词：flag、flash、flavor、flee、flexibility、flip、float、flood、flour、fluid、focus、fog、fold、folk、forbid、formal、format、formation、former、formerly、formula、forth、fortune、foster、founder、fraction、fragile、fragment、frame、fraud、frontier、frown、frustration、fuel、functional、fund、fur、furniture、gallery、gap、garbage、gasoline、gaze、gear、general、generally、generate、generous、genetic、genius、gentle、genuine、giant、gifted、glimpse、global、goal、govern、governor、grab、graduate、grain、grand、graphics、grasp、grateful、grip、guarantee、hall、hallway、handful、handle、hang、hardly、hardware、harm、harmony、harsh、harvest、haul、hazard、head、headquarters、heal、heaven、heel、height、helpful、herb、hesitate、hide、highlight、hike、hint、Hispanic、honor、hook、horizon、hormone、horn。托福高频接续批次；核对多义、多词性、同形异音及地区用法，保留逐词来源与原创例句。



## 批次 023

完成 100 词：horror、hostile、house、household、human、humanity、hunger、hurricane、icon、ideal、identical、identification、identify、identity、ideological、ideology、ignore、illusion、illustration、image、imagine、immediate、immediately、immigration、immune、impact、implement、implication、imply、import、impose、impressive、impulse、incident、incorporate、incredible、independent、industrial、inevitably、infant、infection、influential、informal、ingredient、inherent、inherit、initial、initially、initiate、injure、injury、inner、innovation、inquiry、insert、insight、insist、inspection、inspector、inspiration、inspire、install、instant、institution、instruct、instruction、instrument、intact、integrate、integrated、integrity、intellectual、intelligence、intelligent、intensive、intent、intention、interact、interaction、interactive、interest、interfere、interior、internal、interpret、interpretation、interrupt、interval、intervention、intimate、invade、invasion、inventory、investigate、investigation、involve、involved、irony、isolate、isolated。托福高频接续100词；逐词核对Cambridge常用义、词性和英美音；区分house、impact、implement、import、initiate、insert、intimate、isolate等分读。中文归纳及英文例句为原创。



## 批次 024

完成 100 词：isolation、issue、jar、jaw、jewelry、join、journal、journalism、journalist、juice、jungle、jurisdiction、jury、justice、justify、ken、kingdom、kitchen、label、laboratory、lamp、land、landing、landmark、landscape、largely、laser、lately、latter、launch、laundry、lawn、lawsuit、lay、lead、leadership、leading、league、leap、leather、legacy、legal、legend、legendary、legislature、lens、liberal、liberty、lift、likewise、limb、limitation、lip、liquid、literally、literary、liver、load、loan、lobby、locate、location、log、logic、logical、long、loop、loose、loyal、lung、magic、magnetic、maintenance、majority、makeup、mall、mandate、manipulate、mansion、manual、map、marble、march、margin、marine、mask、mass、massive、match、mathematics、maximum、meaningful、means、mechanical、media、medicine、memorial、memory、mental、mention。托福高频接续100词；逐词核对Cambridge索引词典条目的常用义、词性及英美IPA，并追查缺失及多义条目。区分lead、leading分读，保留issue、jewelry、lawsuit、mathematics、medicine的主要变体；中文归纳与英文例句原创。



## 批次 025

完成 100 词：mentor、menu、mere、merit、metaphor、metropolitan、migration、mild、military、mill、mine、minimal、minimize、minimum、ministry、minority、minute、miracle、mission、mobile、mode、moderate、modest、molecule、moment、monitor、monster、mood、moral、mostly、motion、motivate、motive、mouth、mud、multiple、municipal、mushroom、mutual、mysterious、mystery、myth、nail、naked、narrow、nationwide、natural、naval、nearly、neat、necessity、neck、negative、negotiate、negotiation、neighbor、nervous、net、neutral、nod、nominate、nominee、nonetheless、norm、normal、normally、note、notice、notion、novel、nuclear、numerous、nurse、objection、objective、obligation、observation、observe、obtain、obvious、occasion、occasional、occasionally、occupation、occupy、occur、odd、odds、offensive、offer、official、ongoing、opera、operate、operator、opinion、opponent、opportunity、oppose、opposed。托福高频接续100词（mentor 至 opposed）；核对 Cambridge 词典索引和发音页，negative 动词补查 Collins。保留 minute、moderate、mouth 词性分读及主要英美变体；各义项英文例句原创。



## 批次 026

完成 100 词：opposite、opposition、optimistic、option、oral、organic、orientation、original、originally、outcome、outfit、outlet、outline、output、outstanding、oven、overall、overcome、overlook、oversee、overwhelm、oxygen、pace、pack、package、painting、pale、panel、panic、parade、partial、partially、participant、participate、party、passage、passion、patch、patent、path、patience、patrol、payment、peak、penalty、percentage、perfect、perform、performer、period、permanent、permission、permit、persist、personality、personnel、perspective、persuade、phase、philosophy、photograph、phrase、physician、pile、pill、pillow、pine、pioneer、pit、pitch、pitcher、plaintiff、planet、plastic、platform、plea、plead、pleasure、plot、plunge、poet、Pole、politics、pollution、popular、popularity、portion、pose、positive、possess、possession、post、poster、pot、pound、poverty、powder、practical、practically、practitioner。托福高频接续100词（opposite 至 practitioner）；逐词核对 Cambridge 索引词典及发音页，option、overall、pillow、pit 补查 Collins。区分 perfect、permit、overlook、patent、overall 分读；保留 Pole 大小写义项与各义项原创例句。仅本地提交，累计待发布500词，不推送。



## 批次 027

完成 100 词：praise、preach、precious、precise、predict、prediction、preference、pregnant、preliminary、premise、premium、prescription、presence、presidency、pressure、presumably、pretend、prevail、prevent、previous、pride、primary、prime、principal、prior、priority、prison、private、privilege、procedure、proceed、proceeding、proclaim、produce、productive、profession、professional、profile、profit、progress、progressive、prohibit、project、projection、promise、promising、promote、prompt、proof、proper、property、proposal、propose、prospect、protection、protein、protest、provide、province、provision、provoke、psychologist、psychology、publication、publicity、pulse、pump、punch、purchase、pure、purple、pursue、puzzle、qualify、quality、quantity、quarter、quest、questionnaire、race、radar、radical、rage、rail、raise、rally、ranch、random、range、rare、rarely、rat、ratio、rational、raw、ray、react、readily、ready、realize。托福高频接续100词（praise 至 realize）；逐词核对 Cambridge 索引词典与发音页，premium、presence、principal、productive、proceeding、pump、ranch、raw、ready 补查 Collins。348条原创义项例句；区分 premise、produce、progress、project、protest 分读和 premises、proceedings 复数专用义。仅本地提交，累计待发布600词，不推送。



## 批次 028

完成 100 词：realm、rear、reason、rebel、rebuild、receiver、recent、recently、reception、recipe、recipient、recognition、recognize、recommend、recommendation、recording、recover、recruit、reduce、reduction、refer、reflection、reform、refrigerator、refuge、refuse、regard、regardless、regime、regional、register、regular、regulation、regulatory、rehabilitation、reject、relax、release、relevant、reliability、reliable、relief、relieve、religion、religious、reluctant、rely、remark、remind、reminder、remote、remove、rent、rental、repair、repeat、replace、represent、representation、representative、reproduce、republic、reputation、request、requirement、rescue、reserve、residence、resident、residential、resist、resistance、resolution、resolve、resort、resource、respect、respectively、respond、responsibility、responsible、restore、restrict、restriction、resume、retail、retailer、retire、retirement、retreat、retrieve、revelation、reverse、review、revolutionary、reward、rhetoric、rhythm、ribbon、rid。托福高频接续100词（realm 至 rid）；逐词核对 Cambridge 索引定义与英美标音，补查 Collins。330条原创义项例句；保留 rebel、refuse、reject、resume、retail 词性或义项分读及主要用法标记。仅本地提交，累计待发布700词，不推送。



## 批次 029

完成 100 词：ridge、ridiculous、rifle、rim、ring、riot、rip、risk、risky、rival、rod、role、roll、romance、roof、rope、roughly、routine、row、rub、ruin、rule、rumor、rush、sack、sacred、sail、sake、sale、sample、sanction、satisfaction、satisfy、save、scale、scan、scandal、scare、scatter、scene、scent、scheme、scholar、scholarship、scope、score、scramble、scratch、screen、screw、scrutiny、seal、search、season、secondary、secret、section、sector、secular、secure、security、seemingly、segment、seize、seldom、select、selection、senator、sensation、sensitive、sensitivity、sentence、serious、seriously、session、setting、severe、shade、shake、shallow、sharp、sharply、shed、sheer、sheet、shelf、shell、shelter、shift、shine、shock、shore、shot、shove、shower、shrimp、shrink、shut、shuttle、shy。托福高频接续100词（ridge 至 shy）；逐词核对 Cambridge 索引定义与英美音，补查 Collins。444条原创义项例句；区分 row、sake、segment 分读，分别标注 sanction 的批准与制裁义，保留语域及词性标记。仅本地提交，累计待发布800词，不推送。



## 批次 030

完成 100 词：sick、sigh、sight、signature、significance、silence、silly、silver、simultaneously、sin、sink、site、skeptical、skip、skull、slap、slave、slice、slide、slight、slightly、slip、slope、smell、smoke、smooth、snake、sneak、soap、sodium、solar、soldier、sole、solely、solution、solve、somewhat、sort、soul、soup、sovereignty、spark、specialty、specific、specify、spectacular、speculation、sphere、spill、spin、spine、spirit、spiritual、sponsor、spoon、spouse、spray、spring、squad、square、squeeze、stability、stack、staff、stake、stand、standard、standing、stare、statistics、statue、status、steady、steak、steal、steam、steer、stem、stereotype、stick、stiff、stimulate、stir、stock、stomach、storage、storm、stove、straight、strain、strategy、streak、strength、strengthen、stress、stretch、strict、strike、string、strip。托福 f1 冻结剩余341词中的首100词（sick 至 strip）；直接核对 Cambridge 定义、词性及英美音，458条原创义项例句。statistics 补核英音；保留 status 美音变体，sovereignty 采用原文完整美音。033 为最后41词完成尾批。待主任务集成；不提交或推送。



## 批次 031

完成 100 词：stroke、structural、struggle、studio、stumble、submit、subsequent、substantially、suburb、succeed、successful、sue、suffer、sufficient、sugar、suggest、suit、suitable、suite、sum、summit、sunlight、superior、supervisor、suppose、supposedly、suppress、supreme、surgeon、surgery、survey、survival、survive、survivor、suspend、suspicion、suspicious、swallow、sweat、sweep、swing、switch、symbol、sympathy、symptom、system、tackle、tag、tale、talent、talented、tank、tap、tape、target、taste、tax、team、tear、technical、telescope、temperature、temple、temporary、tender、tension、term、terrible、terribly、terrific、territory、terror、testify、testimony、texture、theater、theme、theoretical、therapy、therefore、thigh、thin、thoroughly、thought、thread、threat、threaten、threshold、throw、thumb、ticket、tide、tight、tile、timber、tiny、tip、tire、tissue、title。100词（stroke 至 title）；逐词核对 Cambridge 定义、词性及英美音；中文与例句原创，保留tear和survey分读。



## 批次 032

完成 100 词：tobacco、toe、tolerance、tolerate、toll、tomato、tongue、topic、touch、touchdown、tough、tournament、towel、tower、toxic、trace、track、traffic、tragedy、trail、transfer、transform、transformation、transit、translation、transmission、transmit、trap、trash、tray、treasure、treat、treatment、tremendous、trend、trial、tribal、tribute、trick、trim、trip、triumph、troop、tropical、trouble、trunk、truth、tube、tune、tunnel、twist、typical、ultimate、uncover、undergraduate、underlying、understand、undertake、unfair、unfold、unfortunately、union、unique、unity、universal、universe、unless、unlikely、unprecedented、urge、utility、vacation、vaccine、vacuum、vague、valid、validity、vanish、variable、variety、various、vary、vast、vegetable、vehicle、venture、verbal、verdict、version、vertical、vessel、veteran、via、victory、violate、violation、violence、violent、virtual、virtue。100 words, tobacco through virtue; direct Cambridge definitions, POS and UK/US IPA. Preserve POS-specific readings and variants. Batch033 is the completion tail: final 41 words, queue.slice(300,341).



## 批次 033

完成 41 词：virus、vision、visual、vital、vocal、volume、voluntary、volunteer、vote、voter、wagon、waist、wander、warehouse、warn、warrior、watch、way、weapon、wear、weave、wedding、weed、weird、whale、wheat、widespread、widow、wildlife、withdraw、withdrawal、witness、wonder、worldwide、worm、wrap、wright、wrist、yell、youngster、zone。冻结 current341remainingTOEFLf1 queue.slice(300,341) 的最终41词尾批，41词全部完成定义、词性及英美音核对，无待复核项；本尾批完成。warehouse 保留名词 /s/ 与动词 /z/（亦可 /s/）分读；wright 标注旧用，worldwide 保留英美重音差异。



## 批次 034

完成 100 词：accompanying、committed、competing、consciously、credentials、exceptionally、genetically、idiot、indefinitely、instinctively、intentionally、packed、pioneering、specialized、sunglasses、swift、tan、abandoned、accomplished、accustomed、acting、affected、aged、alumnus、amass、chat、cherish、chilly、choke、chord、chore、chorus、chuckle、circular、circulate、circulation、clamp、clan、clap、clarify、classification、clause、claw、clergy、clog、clumsy、clutch、coarse、coax、coexist、coherent、coil、coincidence、collaborate、collision、colonel、combustion、comic、commemorate、commence、commentary、commentator、commonplace、communal、commute、commuter、compact、comparative、compass、compatible、competence、competent、compile、complement、complementary、complicate、compliment、comprehend、comprehension、compression、compute、conceal、conceptual、concession、concur、condemnation、conditioning、conductor、cone、confer、confide、confidential、configuration、confine、confirmation、conflicting、conform、congestion、congressman、conjunction。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：automated。OALD 无 automated 独立词条（仅作 automate 的过去分词 /ˈɔːtəmeɪtɪd/）；剑桥与柯林斯本次无法访问。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/automate)。不计入完成数。
待复核：obsessed。OALD /definition/english/obsessed 返回 404，仅见 obsess、obsession、obsessive。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/obsession)。不计入完成数。
待复核：prescribed。OALD /definition/english/prescribed 返回 404。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/prescription)。不计入完成数。
待复核：troubling。OALD /definition/english/troubling 返回 404。现有 ECDICT 释义“浊度，浑浊度”与常用义“令人不安的”不符，需优先复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/trouble_2)。不计入完成数。

## 批次 035

完成 100 词：conjure、conquer、conservatism、conserve、console、consolidate、consortium、conspicuous、conspire、constellation、constituent、constrain、contaminate、contamination、contempt、contender、contention、continental、contingent、continually、continuation、continuity、continuum、contraction、contradict、contradictory、contrary、convene、convenient、converge、convincing、convoy、coordination、copper、coral、corps、corpse、correlate、correspond、correspondence、corresponding、countless、courthouse、cowboy、cozy、crab、cram、cramped、crater、crave、credential、creditor、creep、cripple、crisp、crooked、crossing、crouch、crow、crumble、cube、cubic、cucumber、cuisine、culinary、culminate、cult、cultivate、cultivation、cupboard、curator、curb、curtail、cushion、cylinder、cynical、dairy、damp、dangle、daring、dart、daunting、dazzling、decay、deceive、deception、declaration、decoration、decorative、decree、default、defect、defer、defiant、deficiency、definite、definitive、deflect、defy、degradation。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 036

完成 100 词：degrade、deity、delegate、delete、deliberate、demise、demolish、den、denomination、denote、denounce、dent、dental、dentist、dependence、deposition、deprivation、descendant、descent、deserted、designate、desirable、despise、destiny、destructive、detain、deter、deteriorate、deterrent、devastate、devastation、devoid、devoted、devotion、devour、diagram、dietary、differentiate、digest、dilute、dim、dime、dinosaur、dioxide、diplomacy、disadvantage、disarm、disastrous、discard、discern、discharge、disciple、discomfort、disconnect、discontent、discrete、discretion、discriminate、disdain、disgust、dismal、dismay、dispatch、dispense、displace、displacement、disposal、dispose、disposition、disregard、disrupt、disseminate、dissertation、dissipate、distinctly、distinguished、distort、distortion、distress、disturbance、ditch、dive、diver、diversify、diversion、divert、dizzy、documentation、dodge、dolphin、doom、doubtful、drainage、drastic、drawback、dread、dreadful、drip、drizzle、dual。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：destine。OALD /definition/english/destine 及 destine_1 均无独立词条（仅有形容词 destined）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/destined)。不计入完成数。

## 批次 037

完成 100 词：dubious、dull、duplicate、durable、duration、dwarf、dwell、dwelling、dye、earnest、eccentric、ecology、ecstasy、educated、efficacy、electron、elegance、elevate、elevation、elicit、elimination、elude、elusive、emanate、embarrass、embed、embody、embryo、empower、emulate、enclose、enclosure、encompass、endanger、endangered、endlessly、endow、endurance、enduring、energetic、energize、engender、engulf、enlist、enrich、ensemble、entail、entertainer、entice、envoy、enzyme、epic、equate、equilibrium、equitable、eradicate、erase、erect、erode、erupt、escalate、escort、etch、eternal、ethic、evacuate、evade、evaporate、evenly、eventual、evolutionary、exaggerate、excavation、excel、exceptional、excerpt、excess、excite、exclaim、exclusion、excursion、exemplify、exempt、exemption、exert、exhausted、exhaustion、exile、expanse、expansive、expel、expenditure、expire、exploitation、explorer、explosive、expressive、exquisite、exterior、extinction。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：endeavor。OALD 以英式拼写 endeavour 立目（标注 also endeavor），/definition/english/endeavor 返回 404；现有检查要求来源路径与词形一致，暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/endeavour_1)。不计入完成数。

## 批次 038

完成 100 词：eyewitness、facet、faction、factual、faithful、fake、falter、famine、fascinate、fascination、fashionable、fasten、feat、feminism、ferry、fertilizer、fictional、filthy、financing、fingertip、fixture、flake、flap、flare、flashlight、flatter、flaw、flea、flicker、flock、floral、fluctuation、fluorescent、flush、flux、foam、foe、foil、foliage、folly、foolish、forecast、forefront、foremost、foresee、forge、formidable、formulate、fort、fortress、fortunate、foul、fountain、fragrance、fragrant、frail、frank、frantic、freight、frenzy、freshly、fret、frightening、fringe、frustrating、fume、fungus、furious、furnace、furnish、fury、futile、gallon、gangster、garment、garnish、gasp、gauge、gem、generalization、genetics、geometric、geometry、germ、gigantic、glamorous、glamour、gland、glare、glaze、glide、gloom、gloomy、glorious、glossy、glowing、glue、gorgeous、gorilla、gospel。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：favored。OALD /definition/english/favored 无独立词条（英式拼写 favoured 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/favoured)。不计入完成数。
待复核：functioning。OALD 无 functioning 独立词条，仅见动词 function。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/function_2)。不计入完成数。
待复核：furnishing。OALD /definition/english/furnishing 无独立词条（复数 furnishings 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/furnishings)。不计入完成数。
待复核：geographic。OALD /definition/english/geographic 无独立词条（以 geographical 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/geographical)。不计入完成数。

## 批次 039

完成 100 词：gossip、gourmet、graceful、gracious、granite、graphic、gratitude、gravitational、graze、grease、greasy、greedy、grievance、grieve、grim、grind、grumble、gulf、hail、hallmark、halt、ham、hamburger、hamlet、hammer、hamper、handicap、handy、harass、harden、hardship、harmful、harmless、harness、hasten、hatch、hatred、haunt、haven、hay、hazardous、haze、healing、heave、heavenly、heed、heighten、heir、helper、helpless、hemisphere、herd、hinge、hoist、hollow、homicide、horizontal、hostility、hover、howl、hub、huddle、hue、humane、humanitarian、humble、humidity、humiliate、humility、humorous、hurdle、hurl、hustle、hybrid、hydrogen、hypothesize、iceberg、idol、ignite、ignorance、ignorant、illicit、illuminate、imagery、imaginary、imaginative、imbalance、imitate、imitation、immense、immerse、imminent、immunity、impair、impart、impatient、impending、imperative、impetus、implicate。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：harbor。OALD 以英式拼写 harbour 立目，/definition/english/harbor 无词条；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/harbour_1)。不计入完成数。
待复核：homemade。OALD /definition/english/homemade 无词条（以 home-made 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/home-made)。不计入完成数。

## 批次 040

完成 100 词：imposing、imprisonment、inability、inadequate、inappropriate、incidence、incidentally、inclination、inclined、inclusive、incompetent、incur、indicative、indictment、indifference、indifferent、indispensable、induce、industrialized、infamous、infect、infectious、inferior、inflate、inflict、influx、informed、infuse、inhabitant、inheritance、inject、injustice、insane、insanity、insignificant、insistence、inspect、institute、instrumental、insufficient、insulation、insulin、insult、integral、intellect、intensify、intercept、interference、intermediate、interpersonal、intersection、intervene、intimacy、intimidate、intimidation、intrigue、intriguing、intrinsic、intruder、intrusion、invader、invariably、inviting、invoke、ironic、irregular、irrelevant、irresistible、irresponsible、irritate、jealous、jealousy、jelly、jeopardy、jerk、jewel、jog、journalistic、jug、juicy、juvenile、keen、keyboard、kidnap、knowledgeable、laborer、lace、lag、lagoon、lament、lash、lasting、lateral、latitude、lava、lavish、layout、leak、lease、ledge。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 041

完成 100 词：leisure、lengthy、lethal、lettuce、liaison、liberate、librarian、limestone、limp、lineage、linear、linen、linger、linguistic、litter、livelihood、lively、livestock、lizard、lobster、locally、lodge、lofty、lone、longevity、longing、loom、loosely、loosen、lottery、lucrative、lumber、lump、lunar、lurch、lure、lurk、lust、luxurious、luxury、magical、magician、magnificent、magnify、mammal、mandatory、maneuver、manifestation、mantle、manufacture、manure、marital、maritime、markedly、marrow、marsh、marvel、matching、maternal、mature、maze、mediate、mediator、melody、membrane、memo、memorable、menace、merchandise、mercury、merge、merger、messy、metabolism、meteor、methodology、microscope、microscopic、microwave、mighty、migrant、milestone、militant、millennium、millionaire、mince、mingle、miniature、mint、miraculous、misconception、miserable、misery、mislead、misleading、mitigate、mobility、mock、modem、moist。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：marvelous。OALD /definition/english/marvelous 无词条（以英式拼写 marvellous 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/marvellous)。不计入完成数。
待复核：meager。OALD /definition/english/meager 无词条（以英式拼写 meagre 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/meagre)。不计入完成数。

## 批次 042

完成 100 词：moisture、mold、molecular、monarch、monetary、morale、mortal、mortar、moss、moth、motionless、mourning、multiply、multitude、mundane、muscular、myriad、mythology、narcotic、nationality、navigate、navigation、needy、neglect、neon、niche、nickel、nickname、nitrogen、noisy、nonsense、nostalgia、notable、notch、notorious、novelty、novice、nowadays、nucleus、numb、nutrition、nutritional、oath、obedience、oblige、obscene、obscure、observatory、obsession、obsolete、obstruction、occupant、occurrence、oddly、offshore、omit、onset、opaque、opposing、optical、optimal、optional、orbital、orchard、orchestra、orchid、ordeal、orderly、ordinance、orient、oriental、originate、ounce、oust、outbreak、outdoors、outgoing、outing、outlook、outrage、outrageous、outright、outset、outspoken、outward、outweigh、oval、overflow、overlap、oversight、overt、overtime、overturn、overwhelmingly、oyster、ozone、packaging、pact、paddle、palette。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：nontraditional。OALD /definition/english/nontraditional 无独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nontraditional)。不计入完成数。
待复核：odor。OALD /definition/english/odor 无词条（以英式拼写 odour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/odour)。不计入完成数。

## 批次 043

完成 100 词：pamphlet、pants、parachute、parallel、paralysis、parameter、paramount、parliamentary、parrot、partisan、passionate、passive、pastel、pasture、pathogen、pathway、patriotic、pave、peculiar、pending、penetrate、peninsula、perch、perennial、perfection、perfume、peril、perimeter、periodic、peripheral、permeate、perpetuate、persistence、persistent、persuasive、pertinent、pervasive、pest、pesticide、petal、petition、petroleum、philosopher、physicist、physiological、pianist、pierce、pigeon、pillar、pinch、pineapple、pinpoint、pivotal、plague、plainly、planetary、plank、plantation、plasma、plaster、playwright、plaza、pleasing、pledge、plentiful、plight、plow、pluck、plumbing、plummet、plump、poise、poison、polar、Polish、polished、pollen、pollutant、pollute、ponder、popcorn、porcelain、portable、portrayal、postal、postcard、postpone、posture、potent、poultry、prairie、precaution、precedent、preceding、precision、preclude、precursor、predecessor、predictable、prejudice。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：paralyze。OALD /definition/english/paralyze 无词条（以英式拼写 paralyse 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/paralyse)。不计入完成数。
待复核：paycheck。OALD /definition/english/paycheck 无词条（以 paycheque 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/paycheque)。不计入完成数。
待复核：postwar。OALD /definition/english/postwar 无词条（以 post-war 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/post-war)。不计入完成数。

## 批次 044

完成 100 词：premature、preoccupation、prescribe、preservation、prestige、prestigious、presume、presumption、prevailing、prevalent、pristine、probe、proceeds、prod、profoundly、progression、proliferation、prolong、prominence、promoter、prone、pronounced、prop、propel、proponent、proposition、prose、prosecute、prospective、prosper、prosperous、protagonist、prototype、provocative、proximity、proxy、prudent、pry、psyche、publicize、puddle、pulp、pumpkin、pupil、pyramid、qualification、qualified、quantitative、quarry、query、questionable、quilt、quota、quotation、radiant、radiate、radically、radius、raft、ragged、raid、rainbow、rainfall、ramp、rampant、rancher、rap、ratify、rattle、realism、realization、reap、rearrange、reassure、rebellion、recede、receptive、receptor、reckless、reckon、reclaim、recollection、reconcile、reconciliation、reconstruct、reconstruction、recreation、recreational、rectangular、recycle、redeem、reed、reef、reel、refine、refined、reformer、refreshing、refrigerate、regimen。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

历史待复核：recount，已在批次 071 完成核对。原记录：OALD /definition/english/recount 及 recount_1 本次未取到词条页（该词有动词 /rɪˈkaʊnt/ 与重新计票 /ˌriːˈkaʊnt/ 等多个同形词条）；保留待复核。 [此前资料](https://www.oxfordlearnersdictionaries.com/definition/english/recount)。

## 批次 045

完成 100 词：rehearse、reign、reiterate、rejection、relaxation、relaxed、relay、relentless、relevance、reliance、relinquish、remainder、remarkably、remedy、remnant、renew、renewable、renewal、renovate、renovation、repertoire、repetition、replica、reproduction、reproductive、resemblance、resent、reshape、reside、residual、residue、resistant、resonance、respective、respiratory、responsive、restoration、restrain、restraint、restrictive、retrospect、retrospective、revise、revision、revival、revive、revolt、rhythmic、rigorous、rinse、ripe、rite、rivalry、roam、roar、roast、robust、rocky、rodent、rot、rotation、rotten、rounded、rubble、rugged、rumble、rustic、rusty、ruthless、saddle、saga、salient、salvage、sanctuary、sandy、sane、satisfactory、saturated、scar、scarcely、scenery、scenic、scholarly、scissors、scoop、scour、scout、scrap、scrape、scribble、scripture、scrub、scrutinize、sculptor、scurry、seam、seasonal、seasoning、seduce、seep。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：rigor。OALD /definition/english/rigor 无词条（以英式拼写 rigour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rigour)。不计入完成数。
待复核：runoff。OALD /definition/english/runoff 无词条（以 run-off 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/run-off)。不计入完成数。
待复核：savor。OALD /definition/english/savor 无词条（以英式拼写 savour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/savour_1)。不计入完成数。

## 批次 046

完成 100 词：selfish、semester、sensational、sensibility、sensible、sensory、sentimental、separately、sermon、sever、sew、sewer、shaft、sharpen、shatter、shear、shepherd、shield、shiny、shipment、shocked、shocking、shovel、shred、shriek、shrub、shuffle、shun、shutter、sickness、sideways、siege、signify、simplicity、simulate、simultaneous、sinister、skeleton、skeptic、skepticism、sketch、skim、slab、slash、slender、slim、slipper、slippery、slogan、sloppy、slum、slump、sly、smack、smash、smear、smoothly、smuggle、snag、sniff、sober、solemn、solicit、solidarity、solitary、solitude、solo、soothe、sophistication、sour、souvenir、sovereign、spacecraft、spacious、span、spatial、spawn、specification、specimen、spectacle、spectator、speedy、spider、spike、spinach、spinal、spiral、splash、splendid、spoil、sponge、spotlight、sprawl、sprout、spur、squarely、squash、squat、squirrel、stab。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：shining。OALD /definition/english/shining 无独立词条（作 shine 的形容词用法）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/shining)。不计入完成数。
待复核：soaring。OALD /definition/english/soaring 无独立词条（作 soar 的派生形式）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/soaring)。不计入完成数。
待复核：soy。OALD /definition/english/soy 本次未取到独立词条（OALD 以 soya 等立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/soy)。不计入完成数。
待复核：soybean。OALD /definition/english/soybean 本次未取到独立词条（OALD 以 soya bean 等立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/soybean)。不计入完成数。

## 批次 047

完成 100 词：stabilize、stagger、staggering、stain、stained、staircase、stale、stalk、stall、stamp、standpoint、staple、stark、startle、startling、starvation、starve、static、stature、stellar、sterile、stew、sticky、stiffen、stifle、stimulation、sting、stitch、strand、strap、stray、stride、stringent、stripe、strive、stroll、stubborn、stun、stunning、stunt、sturdy、subdivision、submarine、submission、subordinate、subsequently、subside、subsidiary、subsidize、substantive、substitute、subway、successive、succumb、suitcase、sulfur、summon、sunrise、sunset、sunshine、superb、superficial、superintendent、supernatural、supervise、supervision、supplement、surge、surpass、surrender、susceptible、sustained、swamp、swarm、sway、sweeping、swelling、syllable、symbolism、symbolize、sympathetic、symphony、synthesis、synthetic、syrup、systematic、tailor、tangible、tangle、tasty、tavern、tease、temper、temperament、temporal、temporarily、tempt、tempting、tenant、tense。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：standardized。OALD /definition/english/standardized 无独立词条（作 standardize 的派生形式）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/standardized)。不计入完成数。

## 批次 048

完成 100 词：tentative、terminal、terminate、terminology、terrace、terrestrial、terrify、terrifying、theft、therapeutic、thereafter、thermal、thermometer、thesis、thickness、thorough、thoughtful、thrust、thump、thunder、thwart、tilt、tin、tolerant、tornado、touching、tow、towering、tract、traction、tractor、traitor、transcend、transcript、transparent、transplant、traverse、tread、treadmill、tremble、trench、triangle、trickle、trillion、trivial、trot、troublesome、trumpet、tub、tug、tuition、tumble、turbulent、turmoil、turtle、tutor、twig、ultraviolet、unanimous、unconscious、unconventional、underestimate、underground、underlie、underneath、underscore、undertaking、underwater、undo、undoubtedly、unemployed、unify、unload、unpredictable、unravel、unstable、untouched、unveil、upgrade、upheaval、uphold、upright、uprising、upscale、urgency、urgent、useless、usher、utilization、utter、utterly、vacant、validate、valve、vanity、variability、variance、variant、varied、vault。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：vantage。OALD /definition/english/vantage 无独立词条（以 vantage point 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/vantage)。不计入完成数。

## 批次 049

完成 100 词：veer、vegetarian、veil、vein、vent、ventilation、venue、versatile、verse、veto、vibrant、vibrate、vibration、vicinity、vie、vigorous、vine、vinegar、visibility、vista、vitality、vocation、vocational、void、volatile、volcano、voltage、voyage、wade、wail、walnut、wan、ward、ware、warfare、warrant、warranty、wary、waver、wax、weary、wed、weep、wholesale、wield、wit、withstand、witty、wool、worthy、wrath、wreck、wrestling、wrinkle、yearn、aggressiveness、diligently、domesticated、ethically、fleeting、idiotic、ineligible、inextricably、maverick、meticulously、notoriously、pervert、philharmonic、pique、scrupulously、sheltered、snarl、sow、sparingly、spectacularly、spontaneously、sporadically、spout、strenuously、strikingly、stubbornness、stylized、sunburn、superficially、supremely、textured、turnpike、tutorial、unevenly、unquestionably、abiding、absorbing、abyss、adjoining、adventurous、analogous、aspiring、chasm、chaste、chateau。托福次高频（f2）收尾与中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：vigor。OALD /definition/english/vigor 无词条（以英式拼写 vigour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/vigour)。不计入完成数。
待复核：woods。OALD /definition/english/woods 无独立词条（作 wood 的复数义项）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/woods)。不计入完成数。
待复核：approaching。OALD 无 approaching 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/approaching)。不计入完成数。
待复核：coordinated。OALD 无 coordinated 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/coordinated)。不计入完成数。
待复核：dues。OALD 无 dues 独立词条（作 due 的名词复数义项）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/dues)。不计入完成数。
待复核：entrenched。OALD 无 entrenched 独立词条（作 entrench 的派生形式）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/entrenched)。不计入完成数。
待复核：specified。OALD 无 specified 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/specified)。不计入完成数。
待复核：tropics。OALD 无 tropics 独立词条（以 tropic 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tropics)。不计入完成数。
待复核：accelerated。OALD 无 accelerated 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/accelerated)。不计入完成数。
待复核：acclaimed。OALD 无 acclaimed 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/acclaimed)。不计入完成数。
待复核：ascending。OALD 无 ascending 独立词条。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/ascending)。不计入完成数。
待复核：auspice。OALD 无 auspice 独立词条（以 auspices 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/auspice)。不计入完成数。

## 批次 050

完成 100 词：checkout、chide、chiefly、chimpanzee、chirp、chisel、choppy、choreograph、choreographer、choreography、chronology、chubby、chum、cider、circumference、circumscribe、circumvent、civility、clam、clamour、clandestine、clarification、cleanse、clergyman、climatic、climax、clinch、clockwise、clot、clutter、coalesce、coddle、codify、cog、coherence、cohesion、cohesive、collateral、collusion、colonize、colossal、colt、comical、commend、commercialize、comparatively、compensatory、complicity、complimentary、composure、comprehensible、compulsive、compulsory、computation、conceit、concentric、concerted、concerto、conciliatory、concise、conclusive、concoct、concomitant、concurrent、condensation、condiment、condone、condor、confederate、confinement、confiscate、confluence、confound、congenial、congenital、congested、conglomerate、congregate、conifer、conjecture、connoisseur、conscientious、consequent、conservationist、conservatory、considerate、consign、consonant、consort、consternation、constrict、construe、contagious、contemptuous、contented、contiguous、continual、contrive、convection、conventionally。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：checkup。OALD 仅收 check-up（带连字符），拼写不同，待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/checkup)。不计入完成数。
待复核：clamor。OALD 仅收英式拼写 clamour，待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/clamor)。不计入完成数。
待复核：compressed。OALD 无独立词条（仅作 compress 的屈折形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/compressed)。不计入完成数。

## 批次 051

完成 100 词：conversational、converse、converter、cordial、corroborate、corrode、corrosion、corrosive、cosmopolitan、cottonwood、counteract、counterbalance、counterfeit、courier、courteous、courtly、courtship、cove、cower、crafty、crass、crayon、craze、credence、creed、crevice、crimson、crippling、crumple、cryptic、crystalline、crystallize、culmination、cumbersome、cunning、cursory、curt、custodian、customarily、cuticle、cyclone、dagger、daisy、dampen、dank、dated、daze、dazzle、debatable、debtor、decadence、decadent、deceit、deceptive、deciduous、decomposition、decorum、decrepit、decry、defection、defective、deference、deficient、deformation、defraud、deft、defunct、degenerate、dehydrate、dehydration、delectable、deleterious、delineate、delirium、delta、delude、demolition、dentistry、dependable、deplete、deplore、deport、depose、depositor、depot、depreciation、depress、deride、derivative、desolate、despicable、detach、detached、detectable、detergent、determinant、detest、detract、detriment、detrimental。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：crisscross。OALD 仅收 criss-cross（带连字符），拼写不同，待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/crisscross)。不计入完成数。

## 批次 052

完成 100 词：deviate、devious、devout、diagonal、diagonally、dialect、diction、dictum、diffuse、diffusion、digestion、digestive、dignified、dilate、diligent、dilution、dimensional、diminutive、dimly、dingy、disagreeable、disapproval、disarray、disband、discernible、discerning、disciplined、discord、discouraging、discreet、disfigure、disgrace、disgusted、disillusion、disintegrate、disinterested、disparage、dispersal、disproportionate、disprove、disrespect、disrespectful、dissect、dissension、dissenter、dissimilar、dissonance、distasteful、distinctively、diverge、divergence、divergent、diversification、divulge、dizziness、dizzying、docile、dogged、dogma、dogmatic、dominion、dormitory、dorsal、doze、dragonfly、dramatize、dreary、driftwood、droplet、drowsy、dungeon、dusky、dweller、dwindle、earthenware、ebb、eccentricity、ecologist、economical、edible、edifice、effigy、effluent、eject、elaborately、elapse、elasticity、elation、electromagnetic、elixir、elliptical、eloquence、eloquent、elucidate、emancipation、embellish、embellishment、emblem、embroider、embroidery。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：dietitian。OALD /definition/english/dietitian 无独立词条（以 dietician 立目），拼写不同，待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/dietitian)。不计入完成数。
待复核：disorganize。OALD 无 disorganize 词条（仅收形容词 disorganized），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/disorganize)。不计入完成数。
待复核：diversified。OALD 无独立词条（仅作 diversify 的屈折形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/diversified)。不计入完成数。

## 批次 053

完成 100 词：embryonic、emigrant、emigrate、eminent、emphatic、enactment、encase、enchant、encroach、encyclopedia、endowment、engaging、engrave、engraving、engross、enigma、enigmatic、enlighten、enlightenment、enmity、enormity、enrage、enslave、entangle、entanglement、enterprising、enthral、enthusiastically、enumerate、enunciate、envelop、ephemeral、epoch、equestrian、err、erratic、erroneous、escalator、eschew、esteem、etiquette、eulogy、evaporation、evasion、evasive、evergreen、everlasting、evince、exacting、exaggeration、exalt、exalted、exasperate、exemplary、exertion、exhale、exhausting、exhaustive、exhilarating、exodus、exorbitant、expedient、expedite、exponent、exponential、exposition、expound、expressly、extant、exterminate、extinguish、extol、extort、extraneous、extravagant、extremity、extricate、exuberant、exude、fable、fabricate、facile、facsimile、falcon、fallow、familiarize、fanatic、fanatical、fanaticism、fanciful、farce、fateful、faucet、fauna、feeble、feeder、feign、fell、felt、fencing。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：enthrall。OALD /definition/english/enthrall 无独立词条（以英式拼写 enthral 立目，enthral 已在本批收录），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/enthrall)。不计入完成数。

## 批次 054

完成 100 词：fender、ferment、fermentation、ferocious、fertilize、fervent、festive、fetish、feud、feudal、feverish、fickle、fictitious、fidelity、finch、finesse、fir、fishy、fitting、flair、flamboyant、flashy、flattering、flaunt、fleck、flimsy、flint、floodplain、flora、flounder、flout、fluent、fluffy、foggy、folding、folklore、footnote、foray、forbidding、forebear、forefather、forerunner、foreshadow、foresight、forestall、foretell、forlorn、formative、forsake、forthright、fortify、fortitude、fortuitous、fowl、fractious、fragility、fragmentary、fraternal、fraudulent、fraught、fray、freighter、frenetic、freshness、fright、frigid、frugal、fruitful、fruition、fruitless、funnel、furry、further、fuse、fussy、fuzz、gag、gait、gale、gallant、galvanize、gamma、gape、garb、garner、gaseous、gash、generalize、genesis、genial、genteel、gentry、genus、germinate、gist、glacial、glaring、glassware、glassy、glazed。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：fervor。OALD /definition/english/fervor 无词条（以英式拼写 fervour 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fervor)。不计入完成数。
待复核：flickering。OALD 无独立词条（仅作 flicker 的屈折形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/flickering)。不计入完成数。
待复核：geologic。OALD 无独立词条（收 geological，geologic 为美式变体），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/geologic)。不计入完成数。

## 批次 055

完成 100 词：gleam、glean、glib、glider、gloat、glorify、glossary、glut、gnaw、goad、gorge、grace、gradient、graft、grandeur、graphite、grasshopper、gratify、gratuitous、gregarious、grope、grudge、gruff、grumpy、guise、gull、gulp、gush、gust、gymnastics、haggle、haphazard、hardness、hardy、harmonic、harmonica、harmonious、harmonize、harry、haste、hasty、hatchery、hatchet、haughty、haunted、hazel、hazy、healthful、hearsay、hectic、helium、hem、herald、herder、heresy、hermit、heroism、heterogeneous、hew、heyday、hibernation、hideous、hilarious、hilly、hinterland、hive、hoarse、hoax、hoe、holocaust、homage、homesick、homily、homogeneous、horde、horned、horsepower、hospitable、humanist、humanistic、hummingbird、hump、husk、hygiene、identifiable、idiom、idiosyncrasy、idyllic、illegitimate、illiterate、illumination、illustrious、imbue、immigrate、immobile、immobilize、immortal、impale、impartial、impassioned。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 056

完成 100 词：impassive、impeach、impeccable、impediment、impel、impersonal、impersonate、impervious、impotence、imprint、improbable、impromptu、impropriety、impulsive、impunity、impurity、inaccessible、inanimate、inaugurate、incandescent、incapacitate、incarcerate、incense、incessant、incipient、incite、incoherent、incompatible、incomprehensible、inconceivable、inconclusive、incongruity、incongruous、inconvenient、incorporation、incubate、inculcate、indecent、indefinite、indigent、indignant、indignity、indiscriminately、individualism、industrious、inept、inert、infallible、infancy、inferiority、infertile、infest、infiltrate、inflexible、influenza、informative、infringe、infusion、ingenious、inkling、inland、innermost、innuendo、innumerable、inordinate、inquisitive、insidious、insinuate、insomnia、inspiring、instantaneous、instigate、instinctive、institutionalize、instructive、insular、insulate、insulting、insurmountable、intelligible、intercede、interdependence、interdependent、interlude、intermediary、intermittent、interrogate、intersect、interstellar、intestine、intoxicate、intoxication、intrepid、intricately、introspective、intrude、inundate、invalid、invalidate、invaluable。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：installment。OALD /definition/english/installment 无词条（以英式拼写 instalment 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/installment)。不计入完成数。
待复核：instill。OALD /definition/english/instill 无词条（以英式拼写 instil 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/instill)。不计入完成数。
待复核：interconnected。OALD 无独立词条（仅作 interconnect 的屈折形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/interconnected)。不计入完成数。
待复核：interlocking。OALD 无独立词条（仅作 interlock 的屈折形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/interlocking)。不计入完成数。

## 批次 057

完成 100 词：inverse、invert、invertebrate、invocation、involuntary、ion、irreconcilable、irreverent、irreversible、irrevocable、irrigate、irritable、irritating、itinerant、itinerary、jeer、jellyfish、jettison、jogging、jolt、jovial、joyous、jubilant、judgement、judicious、jumble、junction、juncture、Jupiter、justly、juxtaposition、kennel、kernel、kerosene、kettle、kiln、kindle、kinetic、knapsack、laborious、labyrinth、landslide、languid、languish、latent、laud、laudable、laurel、layman、leaky、leash、legalize、legible、legion、legislate、legume、leisurely、lengthen、leopard、levy、libel、liberally、lichen、lighthouse、linguistics、literate、lithe、loath、loathe、locality、locomotive、lodging、longitude、loot、lore、lug、lull、lumbering、luminosity、lustrous、lusty、lyric、magma、magnesium、magnetism、maim、maize、majestic、majesty、malady、malevolent、malfunction、malice、malicious、malign、malignant、malleable、mallet、malnutrition、mammalian。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：jeweler。OALD /definition/english/jeweler 无词条（以英式拼写 jeweller 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/jeweler)。不计入完成数。
待复核：luster。OALD /definition/english/luster 无词条（以英式拼写 lustre 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/luster)。不计入完成数。

## 批次 058

完成 100 词：mammoth、mangle、mania、mannerism、manually、mason、masonry、Maxim、meddle、mediocre、meditate、meek、melancholy、melodic、melodrama、memorandum、mend、menial、mercantile、merciful、merciless、mesmerize、metabolic、mete、meteorologist、methane、methodical、methodically、meticulous、metropolis、microbe、microcosm、microorganism、migratory、milieu、mimetic、minimalist、minuscule、mirage、misfortune、misgiving、mishap、mistrust、moat、modulate、moisten、momentous、monochrome、monopolize、monotonous、morbid、moribund、moron、morphology、mosaic、mournful、muddle、multifaceted、mythical、narration、naturalist、naturalistic、naughty、nectar、negate、negligence、negligent、negligible、neoclassical、nettle、neuron、neurotransmitter、neutralize、neutron、newscast、nibble、nicotine、nimble、nook、notation、noted、notwithstanding、nourish、nourishment、noxious、null、numerical、nutritious、obligatory、obliterate、oblivion、observance、obsess、obstruct、octopus、onslaught、ooze、optimist、optimum、oracle。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：millimeter。OALD /definition/english/millimeter 无词条（以英式拼写 millimetre 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/millimeter)。不计入完成数。
待复核：newsstand。OALD /definition/english/newsstand 无词条（可能以带连字符的 news-stand 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/newsstand)。不计入完成数。
待复核：nonfiction。OALD /definition/english/nonfiction 无词条（可能以带连字符的 non-fiction 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nonfiction)。不计入完成数。
待复核：nonverbal。OALD /definition/english/nonverbal 无词条（可能以带连字符的 non-verbal 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nonverbal)。不计入完成数。
待复核：nonviolence。OALD /definition/english/nonviolence 无词条（可能以带连字符的 non-violence 立目），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nonviolence)。不计入完成数。

## 批次 059

完成 100 词：orator、ore、organically、originality、ornamental、outcry、outdated、outgrow、outgrowth、outlast、outlying、outmoded、overbearing、overcast、overdue、overestimate、overhaul、overload、painstaking、palatable、paleontologist、panacea、pancreas、pane、paraphrase、parasitic、particulate、patriarch、patriarchal、patriot、patronage、patronizing、paucity、pebble、peck、peculiarity、pedagogy、penal、penchant、pendant、pendulum、penetrating、penicillin、pensive、perceptive、percolate、percussion、perilous、periodical、periphery、perjury、permissible、permissive、perpendicular、perplex、perplexing、perseverance、persevere、perspiration、pervade、pester、physiology、picturesque、pinnacle、pious、pitiful、pivot、placate、placid、plagiarism、plumb、plumber、plunder、ply、pocketbook、polarize、ponderous、populous、porcupine、pore、portend、portraiture、postage、posterity、postgraduate、posthumous、postoperative、postulate、potassium、potted、practicality、precarious、precipitate、precipitous、predatory、predictability、predictive、predominate、preferable、prelude。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：pedagogical。OALD /definition/english/pedagogical 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/pedagogical)。不计入完成数。

## 批次 060

完成 100 词：preponderance、prerequisite、preservative、presumptuous、pretense、pretension、pretentious、primal、primate、primordial、proclivity、prodigal、prodigious、prodigy、profane、profess、professionalism、proficiency、proficient、progenitor、progeny、prohibitive、projector、proliferate、promulgate、propagate、propensity、proprietor、propriety、propulsion、prospector、protectionist、protrude、provocation、prune、psychoanalysis、pueblo、pulsate、puncture、pungent、purge、purification、purify、purport、puzzling、quail、quaint、quandary、quarterly、quartz、queer、quell、quench、quibble、quiver、ranching、ransom、rant、rapture、ration、rationing、rattlesnake、raucous、ravage、raven、ravenous、ravine、raze、readjust、rebate、rebellious、rebuke、rebut、recant、receptacle、receptionist、reciprocal、recital、reclamation、recoil、recourse、rectangle、rectify、recur、reddish、redirect、redress、redundant、reek、refinement、refresh、refreshment、refrigeration、refund、refurbish、refute、regenerate、regeneration、rehabilitate、reimburse。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：projecting。OALD /definition/english/projecting 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/projecting)。不计入完成数。
待复核：protruding。OALD /definition/english/protruding 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/protruding)。不计入完成数。
待复核：rancor。OALD /definition/english/rancor 无词条（英式拼写为 rancour），待别名支持后复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rancor)。不计入完成数。
待复核：reigning。OALD /definition/english/reigning 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/reigning)。不计入完成数。

## 批次 061

完成 100 词：rejuvenate、rekindle、relapse、reliant、relieved、renaissance、rendering、rendition、renounce、repel、repertory、repetitive、replenish、repress、reproach、reptile、repudiate、repulse、repulsive、repute、resentful、resin、resolute、respiration、retard、reticence、retort、retract、retribution、retriever、reverberate、revere、reverence、reversible、revert、revile、revoke、revolutionize、riddle、ridicule、rift、rigidity、ripen、roost、rooster、rote、rubbery、rubbish、ruffle、rupture、rust、saber、SAC、saline、salinity、saliva、salutary、sanitary、sanitation、sanity、sap、sapphire、sarcasm、sarcastic、sardonic、satire、satirical、saucer、scaffolding、scapegoat、scarlet、scavenger、schism、scoff、scorch、Scotch、scraping、screwdriver、scroll、scrupulous、scuff、scuffle、sculpt、sculptural、scuttle、sear、seaweed、seclusion、secrete、secretion、sect、sectional、securely、sedate、sedentary、seedling、seethe、segregate、seismic、selfishness。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：revered。OALD /definition/english/revered 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/revered)。不计入完成数。
待复核：scuba。OALD /definition/english/scuba 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/scuba)。不计入完成数。

## 批次 062

完成 100 词：semblance、sensuous、sentry、sequester、serene、serenity、shabby、shackle、shale、shameless、sheath、sheathe、shellfish、shingle、shipwreck、shortcut、shrewd、shrivel、shyness、sicken、sidestep、sieve、silica、silt、sinuous、skillful、skimpy、skyrocket、skyscraper、slant、slime、slimy、slit、sloth、slug、sluggish、slumber、smog、smother、smug、sneer、snippet、snowflake、snug、sojourn、solicitor、solidify、soloist、soluble、spaceship、sparrow、sparsely、speck、spew、spherical、spiky、spinning、spleen、spontaneity、sporadic、spotless、springboard、springtime、spurt、squabble、squall、squander、squeak、squirt、stamina、standardize、stanza、starch、stardom、stash、stately、stationary、stationery、steadfast、stern、stilt、stimulant、stingy、stipend、stipulate、stipulation、stocky、stony、stout、strait、stratum、streamline、strenuous、strife、stub、stuffy、subdivide、subdue、submissive、subsist。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：sloping。OALD /definition/english/sloping 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/sloping)。不计入完成数。
待复核：splendor。OALD /definition/english/splendor 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/splendor)。不计入完成数。
待复核：submerged。OALD /definition/english/submerged 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/submerged)。不计入完成数。

## 批次 063

完成 100 词：subsistence、subspecies、substantiate、subterranean、subtract、subversive、subvert、succinct、suffrage、suffuse、sullen、sully、sultry、sumptuous、sunflower、sunlit、superfluous、supersede、superstition、supplant、supple、supplementary、supplementation、supposition、supremacy、surcharge、surmise、surmount、suspense、sustenance、symbiotic、symmetrical、sympathize、synchronize、synonym、synonymous、synopsis、synthesize、synthesizer、tacit、tact、tactile、taint、tally、tame、tamper、tantalize、tapestry、tarnish、tasteless、taunt、teapot、tedious、televise、temperate、tenacious、tenderness、tenement、tentacle、tenuous、tepid、termination、termite、thaw、thorn、thorny、thrift、throng、throttle、thunderstorm、timid、tingle、tint、Titanic、toad、tolerable、topsoil、torment、torque、torrent、totality、touchy、trample、tranquil、transfix、transient、transitory、translucent、transmitter、transpire、trapper、travesty、treacherous、treason、tremor、trepidation、trespass、tribulation、tributary、trilogy。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：surging。OALD /definition/english/surging 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/surging)。不计入完成数。
待复核：tranquility。OALD /definition/english/tranquility 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tranquility)。不计入完成数。

## 批次 064

完成 100 词：trolley、trough、troupe、trudge、trumpeter、trustworthy、trying、tumult、tundra、turbulence、turquoise、twine、tycoon、typify、tyrannical、ultimatum、unadorned、unanimity、unbearable、unbiased、unbridled、unbroken、uncanny、uncharted、undaunted、underdeveloped、undifferentiated、undisturbed、unearth、unexplored、uniformity、unimaginable、uninhabited、unmatched、unpack、unparalleled、unrestrained、unrestricted、unruly、unsatisfactory、unscrupulous、unspoiled、untapped、unwieldy、upland、uproar、uproot、urbanization、utensil、utilitarian、Utopian、utterance、vacancy、vacate、vaccinate、valiant、vaporize、varnish、vastness、vaulted、venerable、venom、venomous、veracity、vertebrate、vertigo、vestige、vex、viability、victor、victorious、vigilance、vigilant、vindicate、viral、virtuous、viscous、vogue、volt、voracious、vowel、vulgar、vulgarity、wag、waive、wand、wane、warp、waterproof、wavy、waxy、weariness、weaver、weld、whim、whir、whit、whittle、wholesaler、wholesome。托福中频（f3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：trove。OALD /definition/english/trove 无可用义项（仅见于习语），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/trove)。不计入完成数。
待复核：unfavorable。OALD /definition/english/unfavorable 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/unfavorable)。不计入完成数。
待复核：valor。OALD /definition/english/valor 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/valor)。不计入完成数。

## 批次 065

完成 100 词：willow、windswept、wispy、wistful、wither、woolly、workload、worldly、wring、wristwatch、wrought、wry、yardstick、yarn、yawn、yelp、yen、yolk、zeal、zealot、zealous、zenith、zest、zigzag、zinc、abashed、accommodating、acquainted、acrimonious、addicted、adventitious、aerodynamics、aggravating、airsickness、careerism、chary、chilli、chivalry、chlorophyll、choreographic、cipher、circuitous、circumspect、citadel、clamorous、cleave、cleft、coalescence、cogent、cognizance、cohere、coinage、coincident、collate、colloquial、colloquialism、combustible、comity、commingle、commiserate、commodious、comport、composed、concave、concurrence、condenser、conductivity、confederacy、congratulation、conjectural、connivance、connive、consecrate、constricted、contemptible、continence、contravene、contrite、controvert、conversant、convex、conveyance、convivial、convoke、coop、cornet、corpulent、counterclockwise、covetous、cowhand、cranial、credulous、crevasse、crustacean、crystallization、crystallized、cubism、culpable、dauntless、dawdle。托福中频（f3）收尾及低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：woolen。OALD /definition/english/woolen 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/woolen)。不计入完成数。
待复核：acoustical。OALD /definition/english/acoustical 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/acoustical)。不计入完成数。
待复核：cacti。OALD /definition/english/cacti 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/cacti)。不计入完成数。
待复核：chromosphere。OALD /definition/english/chromosphere 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/chromosphere)。不计入完成数。
待复核：coffeepot。OALD /definition/english/coffeepot 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/coffeepot)。不计入完成数。
待复核：commonsense。OALD /definition/english/commonsense 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/commonsense)。不计入完成数。
待复核：complacence。OALD /definition/english/complacence 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/complacence)。不计入完成数。
待复核：confining。OALD /definition/english/confining 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/confining)。不计入完成数。
待复核：congruity。OALD /definition/english/congruity 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/congruity)。不计入完成数。
待复核：contemn。OALD /definition/english/contemn 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/contemn)。不计入完成数。
待复核：correlated。OALD /definition/english/correlated 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/correlated)。不计入完成数。
待复核：craftspeople。OALD /definition/english/craftspeople 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/craftspeople)。不计入完成数。
待复核：crossbones。OALD /definition/english/crossbones 无可用义项（仅见于短语 skull and crossbones），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/crossbones)。不计入完成数。
待复核：crossbreeding。OALD /definition/english/crossbreeding 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/crossbreeding)。不计入完成数。
待复核：crosscut。OALD /definition/english/crosscut 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/crosscut)。不计入完成数。

## 批次 066

完成 100 词：debilitate、deceitful、decimal、declaim、deface、defame、defecate、deferential、deform、defrost、dehydrated、deign、dejected、delineation、demobilize、demur、deprecate、depreciate、depredation、desirous、despatch、despoil、dethrone、dexterous、dieter、dietetics、dignify、digress、digression、disallow、disarrange、disburse、disclaim、discomfit、discompose、disconcert、discontented、dismember、disown、dispensable、disposed、disreputable、disrepute、dissemble、dissimulate、dissipated、distend、distillation、disunite、doleful、dolorous、downcast、dreadfully、drudgery、ductile、dunce、eclecticism、economize、edify、efface、effrontery、eggshell、egress、elongate、emaciated、emancipate、embalm、embezzle、embitter、emboss、emend、eminence、emolument、encumber、endeavour、enervate、ennui、enrapture、entrap、epidermis、equivocal、equivocate、erratically、erudite、escapist、estimable、euphonious、euphony、eventful、eviscerate、excitable、exculpate、exhilarate、exhume、exocrine、expeditious、extemporaneous、extrude、exultant、facetious。托福低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：dawning。OALD /definition/english/dawning 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/dawning)。不计入完成数。
待复核：debauch。OALD /definition/english/debauch 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/debauch)。不计入完成数。
待复核：declivity。OALD /definition/english/declivity 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/declivity)。不计入完成数。
待复核：demagnetize。OALD /definition/english/demagnetize 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/demagnetize)。不计入完成数。
待复核：deodorizer。OALD /definition/english/deodorizer 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/deodorizer)。不计入完成数。
待复核：derange。OALD /definition/english/derange 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/derange)。不计入完成数。
待复核：designing。OALD /definition/english/designing 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/designing)。不计入完成数。
待复核：detraction。OALD /definition/english/detraction 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/detraction)。不计入完成数。
待复核：dismembered。OALD /definition/english/dismembered 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/dismembered)。不计入完成数。
待复核：distent。OALD /definition/english/distent 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/distent)。不计入完成数。
待复核：distill。OALD /definition/english/distill 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/distill)。不计入完成数。
待复核：dripstone。OALD /definition/english/dripstone 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/dripstone)。不计入完成数。
待复核：drub。OALD /definition/english/drub 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/drub)。不计入完成数。
待复核：edentate。OALD /definition/english/edentate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/edentate)。不计入完成数。
待复核：educable。OALD /definition/english/educable 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/educable)。不计入完成数。
待复核：educe。OALD /definition/english/educe 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/educe)。不计入完成数。
待复核：effervesce。OALD /definition/english/effervesce 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/effervesce)。不计入完成数。
待复核：egoism。OALD /definition/english/egoism 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/egoism)。不计入完成数。
待复核：emaciate。OALD /definition/english/emaciate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/emaciate)。不计入完成数。
待复核：embosom。OALD /definition/english/embosom 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/embosom)。不计入完成数。
待复核：endotherm。OALD /definition/english/endotherm 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/endotherm)。不计入完成数。
待复核：endotoxin。OALD /definition/english/endotoxin 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/endotoxin)。不计入完成数。
待复核：endue。OALD /definition/english/endue 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/endue)。不计入完成数。
待复核：extenuate。OALD /definition/english/extenuate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/extenuate)。不计入完成数。

## 批次 067

完成 100 词：factitious、fahrenheit、faithfulness、falconer、fallacious、fallible、fatalism、fatuous、fealty、fecundity、feint、ferret、ferromagnetic、fervid、fester、fete、fetter、figment、figurehead、filch、fireproof、fitful、flabby、flaccid、flax、flay、flighty、florid、fluster、foghorn、foment、footpath、forcible、ford、forte、fossilize、fossilized、frisky、fritter、frivolity、frost、frugality、fulminate、fulsome、fumigate、funereal、gabble、gage、gainful、gainsay、gallantry、gambol、garrulous、gauche、gazette、gentility、geomagnetic、germane、gibbon、gibe、gild、gilding、girder、girdle、glandular、gourmand、graph、gravitation、grouchy、guile、guileless、gusty、gymnastic、gyration、hackneyed、handcrafted、handicraft、harrow、harshness、hatchling、headstrong、heedless、herculean、heredity、hexagon、hilarity、hillbilly、hirsute、homespun、hominid、hornbill、hornet、horticulture、hovercraft、hubbub、husbandry、hydrosphere、hypersensitive、icicle、idiomatic。托福低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：factious。OALD /definition/english/factious 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/factious)。不计入完成数。
待复核：fagot。OALD /definition/english/fagot 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fagot)。不计入完成数。
待复核：famish。OALD /definition/english/famish 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/famish)。不计入完成数。
待复核：fittingly。OALD /definition/english/fittingly 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fittingly)。不计入完成数。
待复核：flavoring。OALD /definition/english/flavoring 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/flavoring)。不计入完成数。
待复核：flyspeck。OALD /definition/english/flyspeck 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/flyspeck)。不计入完成数。
待复核：fogged。OALD /definition/english/fogged 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fogged)。不计入完成数。
待复核：foist。OALD /definition/english/foist 页面无独立义项（义项在短语动词下），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/foist)。不计入完成数。
待复核：formalized。OALD /definition/english/formalized 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/formalized)。不计入完成数。
待复核：frowzy。OALD /definition/english/frowzy 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/frowzy)。不计入完成数。
待复核：fungi。OALD /definition/english/fungi 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fungi)。不计入完成数。
待复核：fused。OALD /definition/english/fused 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/fused)。不计入完成数。
待复核：galvanization。OALD /definition/english/galvanization 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/galvanization)。不计入完成数。
待复核：garrulity。OALD /definition/english/garrulity 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/garrulity)。不计入完成数。
待复核：gemstone。OALD /definition/english/gemstone 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/gemstone)。不计入完成数。
待复核：hardheaded。OALD /definition/english/hardheaded 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/hardheaded)。不计入完成数。
待复核：homogenize。OALD /definition/english/homogenize 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/homogenize)。不计入完成数。
待复核：ichthyosaur。OALD /definition/english/ichthyosaur 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/ichthyosaur)。不计入完成数。

## 批次 068

完成 100 词：igneous、ignoble、ignominious、illegible、illusive、imbibe、immobility、immolate、impartially、impermeable、impersonation、impertinent、impetuous、impious、importune、impracticality、improvident、imprudent、impudent、impure、inactivate、inborn、incise、incisive、incorruptible、incredulity、incriminate、indefatigable、indemnify、indemnity、indent、indented、indenture、indigestion、indolent、indomitable、infirmary、infirmity、ingeniously、injurious、inoffensive、insolent、instrumentalist、insubordinate、insufferable、invariable、irradiate、irreparable、irrepressible、irreproachable、irresolute、irreverence、iterate、jocose、knell、lackey、lampshade、lank、larynx、lathe、lethargic、lethargy、levity、lifesaver、limpid、lipid、listless、lithograph、lithosphere、loathsome、locomotion、lode、long-lasting、long-standing、lubrication、luxuriant、lyricist、magnetize、magnificence、mainspring、malcontent、malleability、manful、manifold、manoeuvre、marshy、martinet、masticate、matchless、matchstick、melodious、meridian、meteorology、mime、mimicry、mincing、minutely、miser、miserly、mockingbird。托福低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：impassible。OALD /definition/english/impassible 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/impassible)。不计入完成数。
待复核：imprecate。OALD /definition/english/imprecate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/imprecate)。不计入完成数。
待复核：improviser。OALD /definition/english/improviser 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/improviser)。不计入完成数。
待复核：impute。OALD /definition/english/impute 页面无独立义项（义项在短语动词下），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/impute)。不计入完成数。
待复核：indiscrimination。OALD /definition/english/indiscrimination 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/indiscrimination)。不计入完成数。
待复核：indite。OALD /definition/english/indite 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/indite)。不计入完成数。
待复核：inducible。OALD /definition/english/inducible 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/inducible)。不计入完成数。
待复核：inelastic。OALD /definition/english/inelastic 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/inelastic)。不计入完成数。
待复核：intersected。OALD /definition/english/intersected 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/intersected)。不计入完成数。
待复核：intruding。OALD /definition/english/intruding 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/intruding)。不计入完成数。
待复核：inure。OALD /definition/english/inure 页面无独立义项（义项在短语动词下），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/inure)。不计入完成数。
待复核：ionosphere。OALD /definition/english/ionosphere 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/ionosphere)。不计入完成数。
待复核：jolting。OALD /definition/english/jolting 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/jolting)。不计入完成数。
待复核：kymograph。OALD /definition/english/kymograph 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/kymograph)。不计入完成数。
待复核：landmass。OALD /definition/english/landmass 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/landmass)。不计入完成数。
待复核：lave。OALD /definition/english/lave 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/lave)。不计入完成数。
待复核：limner。OALD /definition/english/limner 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/limner)。不计入完成数。
待复核：locomote。OALD /definition/english/locomote 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/locomote)。不计入完成数。
待复核：locoweed。OALD /definition/english/locoweed 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/locoweed)。不计入完成数。
待复核：magnetosphere。OALD /definition/english/magnetosphere 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/magnetosphere)。不计入完成数。
待复核：malediction。OALD /definition/english/malediction 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/malediction)。不计入完成数。
待复核：mechanics。OALD /definition/english/mechanics 未取得独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/mechanics)。不计入完成数。
待复核：Mesozoic。OALD /definition/english/mesozoic 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/mesozoic)。不计入完成数。
待复核：midair。OALD /definition/english/midair 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/midair)。不计入完成数。
待复核：millennia。OALD /definition/english/millennia 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/millennia)。不计入完成数。
待复核：mingling。OALD /definition/english/mingling 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/mingling)。不计入完成数。

## 批次 069

完成 100 词：moiety、mollify、monochromatic、mote、mulberry、multicellular、munificent、needlework、nonconformity、nourishing、obliging、obloquy、obstinate、obtainable、obtrude、obviate、offhand、olfactory、optometrist、opulence、oration、oratorio、ornamentation、osprey、outermost、outwit、overbalance、overburden、overcharge、overconfident、overtax、packer、palpitate、parapsychology、parch、parry、patricide、pauper、pearl、pedagogic、peerless、penury、perishable、permeable、perspire、perturb、pestilence、pestilential、petrify、phenomenally、philology、phlegmatic、phonetics、photosensitive、pilferage、pinhead、pinion、platitude、platitudinous、pliable、pliant、plumage、pollination、pollinator、polygon、polygonal、porpoise、portraitist、postmaster、potentiality、potter、practicable、prate、prefabricated、presage、prevaricate、probity、profitless、profuse、prognostic、projectionist、proofread、propellant、propitiate、propound、proprietorship、prorogue、proscribe、provident、provincialism、punctual、quadrilateral、quiescent、ragtime、rapacious、rascal、rashly、ravish、rawhide、rayon。托福低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：nonhuman。OALD /definition/english/nonhuman 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nonhuman)。不计入完成数。
待复核：nonprofessional。OALD /definition/english/nonprofessional 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nonprofessional)。不计入完成数。
待复核：notate。OALD /definition/english/notate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/notate)。不计入完成数。
待复核：nuclei。OALD /definition/english/nuclei 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nuclei)。不计入完成数。
待复核：nutriment。OALD /definition/english/nutriment 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/nutriment)。不计入完成数。
待复核：odorless。OALD /definition/english/odorless 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/odorless)。不计入完成数。
待复核：overtaxed。OALD /definition/english/overtaxed 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/overtaxed)。不计入完成数。
待复核：overtire。OALD /definition/english/overtire 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/overtire)。不计入完成数。
待复核：peculate。OALD /definition/english/peculate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/peculate)。不计入完成数。
待复核：petrifaction。OALD /definition/english/petrifaction 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/petrifaction)。不计入完成数。
待复核：phenomena。OALD /definition/english/phenomena 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/phenomena)。不计入完成数。
待复核：photosphere。OALD /definition/english/photosphere 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/photosphere)。不计入完成数。
待复核：plainspoken。OALD /definition/english/plainspoken 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/plainspoken)。不计入完成数。
待复核：plash。OALD /definition/english/plash 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/plash)。不计入完成数。
待复核：postdate。OALD /definition/english/postdate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/postdate)。不计入完成数。
待复核：preeminent。OALD /definition/english/preeminent 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/preeminent)。不计入完成数。
待复核：pronghorn。OALD /definition/english/pronghorn 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/pronghorn)。不计入完成数。
待复核：prospecting。OALD /definition/english/prospecting 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/prospecting)。不计入完成数。
待复核：protract。OALD /definition/english/protract 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/protract)。不计入完成数。
待复核：quilter。OALD /definition/english/quilter 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/quilter)。不计入完成数。
待复核：rarefy。OALD /definition/english/rarefy 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rarefy)。不计入完成数。

## 批次 070

完成 100 词：recapitulate、recluse、refraction、refrigerant、regimentation、reinterpretation、remit、rend、renunciation、reorient、reputed、retentive、retrograde、rhinoceros、roe、ruffian、ruinous、ruminate、rustproof、sagacious、sallow、sanctimonious、sapience、satiate、satirist、scanty、scornful、screed、scruple、scud、seaport、seashore、seclude、sedimentary、seismograph、seismology、self-sufficient、sentimentalize、serrated、sewerage、shipload、short-range、shrinkage、silicate、silversmith、singe、skimp、skulk、slacken、slag、slake、slander、slavish、sloop、slothful、snobbish、snowdrift、sociable、softwood、solder、solicitous、soundproof、spangle、spanking、spineless、spinet、spiny、spoilage、stagecoach、starfish、stickpin、stodgy、stonemason、subjection、subjugation、sublimate、subsection、subtraction、suburbanite、suited、sulky、sundial、supercontinent、suspender、swampy、swelter、swiftness、synchronous、systematize、tableland、tableware、tadpole、tapeworm、tardiness、tardy、tedium、teem、teens、telegraph、temperance。托福低频（f4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：rebroadcast。OALD /definition/english/rebroadcast 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rebroadcast)。不计入完成数。
待复核：recompose。OALD /definition/english/recompose 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/recompose)。不计入完成数。
待复核：reformism。OALD /definition/english/reformism 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/reformism)。不计入完成数。
待复核：requital。OALD /definition/english/requital 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/requital)。不计入完成数。
待复核：rhythmical。OALD /definition/english/rhythmical 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rhythmical)。不计入完成数。
待复核：satiric。OALD /definition/english/satiric 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/satiric)。不计入完成数。
待复核：savings。OALD /definition/english/savings 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/savings)。不计入完成数。
待复核：scaled。OALD /definition/english/scaled 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/scaled)。不计入完成数。
待复核：scathe。OALD /definition/english/scathe 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/scathe)。不计入完成数。
待复核：seabed。OALD /definition/english/seabed 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/seabed)。不计入完成数。
待复核：seamount。OALD /definition/english/seamount 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/seamount)。不计入完成数。
待复核：secretin。OALD /definition/english/secretin 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/secretin)。不计入完成数。
待复核：semiarid。OALD /definition/english/semiarid 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/semiarid)。不计入完成数。
待复核：semiliterate。OALD /definition/english/semiliterate 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/semiliterate)。不计入完成数。
待复核：sentimentalism。OALD /definition/english/sentimentalism 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/sentimentalism)。不计入完成数。
待复核：shipwright。OALD /definition/english/shipwright 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/shipwright)。不计入完成数。
待复核：spined。OALD /definition/english/spined 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/spined)。不计入完成数。
待复核：springwater。OALD /definition/english/springwater 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/springwater)。不计入完成数。
待复核：subdiscipline。OALD /definition/english/subdiscipline 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/subdiscipline)。不计入完成数。
待复核：subtractive。OALD /definition/english/subtractive 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/subtractive)。不计入完成数。
待复核：suburbanization。OALD /definition/english/suburbanization 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/suburbanization)。不计入完成数。
待复核：superheat。OALD /definition/english/superheat 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/superheat)。不计入完成数。
待复核：surpassingly。OALD /definition/english/surpassingly 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/surpassingly)。不计入完成数。
待复核：symbology。OALD /definition/english/symbology 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/symbology)。不计入完成数。
待复核：tactics。OALD /definition/english/tactics 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tactics)。不计入完成数。
待复核：tapering。OALD /definition/english/tapering 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tapering)。不计入完成数。
待复核：taxicab。OALD /definition/english/taxicab 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/taxicab)。不计入完成数。
待复核：tectonics。OALD /definition/english/tectonics 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tectonics)。不计入完成数。

## 批次 071

完成 95 词：temporize、tensile、terminus、thatch、thermodynamics、thrall、threateningly、three-dimensional、thresh、thrifty、time-consuming、timidity、tinplate、tipple、toothed、topographical、torpid、torpor、torrential、tortuous、touched、tractable、traduce、transact、transcontinental、transmute、trespasser、trifling、ultrasonic、unaided、unbecoming、unblemished、unbridgeable、unconvincing、uncouth、undeserved、unpalatable、unpromising、unquestioning、unscrupulously、unseasonably、unseemly、unselfish、unsophisticated、untamed、upbraid、upside-down、urbane、urbanism、urbanite、vacillation、vanquish、vaporization、vehement、veining、venerate、veneration、ventilate、venturesome、viscosity、vivacity、walkout、watercourse、weathering、well-being、wheedle、wingspan、wrangler、wren、courteously、customs、eye-catching、facelift、far-reaching、fortuitously、fruitfulness、fruitlessly、idiocy、irregularly、laboriously、long-range、lyrically、nonconformist、obligated、perennially、prohibitively、rentable、reverently、saltiness、slovenly、telecommuter、defile、recount、per capita、space shuttle。托福低频（f4）队列收尾 95 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：theist。OALD /definition/english/theist 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/theist)。不计入完成数。
待复核：thousandfold。OALD /definition/english/thousandfold 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/thousandfold)。不计入完成数。
待复核：threadlike。OALD /definition/english/threadlike 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/threadlike)。不计入完成数。
待复核：toed。OALD /definition/english/toed 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/toed)。不计入完成数。
待复核：trainload。OALD /definition/english/trainload 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/trainload)。不计入完成数。
待复核：tumid。OALD /definition/english/tumid 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/tumid)。不计入完成数。
待复核：undistorted。OALD /definition/english/undistorted 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/undistorted)。不计入完成数。
待复核：unfertilized。OALD /definition/english/unfertilized 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/unfertilized)。不计入完成数。
待复核：unobstructed。OALD /definition/english/unobstructed 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/unobstructed)。不计入完成数。
待复核：urbanize。OALD /definition/english/urbanize 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/urbanize)。不计入完成数。
待复核：videocassette。OALD /definition/english/videocassette 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/videocassette)。不计入完成数。
待复核：vitalism。OALD /definition/english/vitalism 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/vitalism)。不计入完成数。
待复核：vitalist。OALD /definition/english/vitalist 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/vitalist)。不计入完成数。
待复核：warrantable。OALD /definition/english/warrantable 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/warrantable)。不计入完成数。
待复核：weaverbird。OALD /definition/english/weaverbird 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/weaverbird)。不计入完成数。
待复核：wedge-shaped。OALD /definition/english/wedge-shaped 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/wedge-shaped)。不计入完成数。
待复核：cometary。OALD /definition/english/cometary 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/cometary)。不计入完成数。
待复核：despoiler。OALD /definition/english/despoiler 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/despoiler)。不计入完成数。
待复核：eclat。OALD /definition/english/eclat 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/eclat)。不计入完成数。
待复核：immodesty。OALD /definition/english/immodesty 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/immodesty)。不计入完成数。
待复核：jewels。OALD /definition/english/jewels 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/jewels)。不计入完成数。
待复核：larvae。OALD /definition/english/larvae 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/larvae)。不计入完成数。
待复核：laurels。OALD /definition/english/laurels 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/laurels)。不计入完成数。
待复核：measures。OALD /definition/english/measures 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/measures)。不计入完成数。
待复核：mechanized。OALD /definition/english/mechanized 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/mechanized)。不计入完成数。
待复核：multistory。OALD /definition/english/multistory 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/multistory)。不计入完成数。
待复核：oxen。OALD /definition/english/oxen 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/oxen)。不计入完成数。
待复核：paddler。OALD /definition/english/paddler 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/paddler)。不计入完成数。
待复核：patroller。OALD /definition/english/patroller 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/patroller)。不计入完成数。
待复核：platelike。OALD /definition/english/platelike 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/platelike)。不计入完成数。
待复核：purified。OALD /definition/english/purified 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/purified)。不计入完成数。
待复核：seamen。OALD /definition/english/seamen 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/seamen)。不计入完成数。
待复核：semimolten。OALD /definition/english/semimolten 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/semimolten)。不计入完成数。
待复核：stereophotograph。OALD /definition/english/stereophotograph 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/stereophotograph)。不计入完成数。
待复核：stimuli。OALD /definition/english/stimuli 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/stimuli)。不计入完成数。
待复核：strings。OALD /definition/english/strings 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/strings)。不计入完成数。
待复核：subduct。OALD /definition/english/subduct 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/subduct)。不计入完成数。
待复核：subjected。OALD /definition/english/subjected 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/subjected)。不计入完成数。
待复核：survivability。OALD /definition/english/survivability 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/survivability)。不计入完成数。
待复核：thousand-fold。OALD /definition/english/thousand-fold 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/thousand-fold)。不计入完成数。
待复核：ultrasonics。OALD /definition/english/ultrasonics 无独立词条，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/ultrasonics)。不计入完成数。
待复核：spectra。OALD /definition/english/spectra 页面无可用义项（复数形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/spectra)。不计入完成数。

## 批次 072

完成 100 词：advertising、Africa、African、America、American、charm、chase、cheer、cheese、chemistry、chew、child、chin、Chinese、chocolate、church、city、class、classic、classical、classroom、clever、click、client、clock、closet、cloth、clothes、club、coastal、cocaine、code、coffee、collection、college、color、column、combat、come、comfortable、common、competitive、compliance、computer、concentrate、concern、conclusion、consent、contest、contribution、control、cooking、cop、corporate、corporation、correspondent、cost、costly、cottage、couch、council、country、course、cream、create、creation、crime、criminal、crisis、cruise、cultural、cup、cute、cycle、daily、damage、dancer、danger、dark、data、database、day、deadline、dean、decade、December、decision、defendant、degree、deliver、delivery、denial、department、depth、description、designer、desk、detail、detailed、development。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 073

完成 100 词：diary、differ、difference、different、difficult、difficulty、digital、dining、dinner、dip、diplomat、director、disabled、disc、disclose、discovery、discussion、disease、disorder、divine、dock、doctor、dose、dress、drinking、driver、driving、drop、drown、dust、duty、ease、eastern、economy、edit、edition、editor、educational、effectively、ego、elder、elderly、electrical、electricity、electronic、electronics、elsewhere、emergency、employment、end、energy、enforce、engagement、engine、engineer、engineering、England、environment、environmental、equity、essay、establish、Europe、European、evening、event、exam、examination、example、exercise、existence、existing、expensive、experience、experiment、experimental、expert、explosion、export、extra、extreme、eye、factory、failure、fall、familiar、family、famous、fare、farm、feature、fee、feel、female、fever、field、fifth、film、finding、fire。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：favor。OALD 以 favour 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/favor)。不计入完成数。
待复核：favorite。OALD 以 favourite 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/favorite)。不计入完成数。

## 批次 074

完成 100 词：fish、fishing、fleet、flesh、flight、flower、fly、food、foot、foreign、forest、forgive、form、forum、France、freedom、French、frequency、Friday、fruit、function、funeral、future、gang、garage、garden、gender、gene、German、Germany、gesture、get、girlfriend、give、glass、go、gold、golf、good、goods、government、grade、grant、grass、grave、Greece、green、grief、grin、gross、ground、group、growth、guest、guidance、guide、guideline、guitar、guy、gym、habit、hand、handsome、harassment、hard、hat、headache、health、hearing、heart、heavy、helicopter、hell、helmet、hero、historian、historic、historical、history、hit、hold、holiday、homework、horrible、horse、hospital、host、hostage、hotel、housing、hug、hunt、hunting、ice、idea、illegal、illness、important、impossible、improvement。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 075

完成 100 词：in、independence、index、Indian、indicator、individual、industry、influence、information、initiative、insect、insurance、international、interview、introduction、invest、investment、invisible、island、Italy、item、jacket、jail、January、Japanese、jeans、job、judicial、July、June、junior、keep、key、killer、king、kit、knife、knowledge、lab、lack、lake、lane、language、lap、law、lawyer、learn、least、leave、lecture、legitimate、lemon、length、let、letter、level、liability、library、lifestyle、light、likelihood、line、link、list、literature、live、local、lock、London、loss、luck、lunch、machine、magazine、mail、main、make、male、management、manager、market、marketing、master、material、may、meal、measure、measurement、meat、medal、medical、meeting、membership、mess、metal、method、midnight、might、milk、million。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 批次 076

完成 100 词：mind、minister、missile、mixture、model、modern、Monday、money、month、mortgage、most、mother、mount、mountain、movie、museum、music、musical、mutter、nasty、national、native、nature、network、newspaper、night、nightmare、noise、notebook、nothing、November、nowhere、object、ocean、October、office、officer、oil、on、once、one、opening、opt、order、ordinary、organ、organization、otherwise、overseas、owe、ownership、pad、pair、palace、palm、pant、paper、parent、parental、park、parking、part、pass、pattern、pay、peel、pence、penny、pension、per、person、personal、phone、physical、physically、piano、pick、picture、pie、pin、pink、place、placement、plan、planner、planning、plant、player、pleasant、plus、pocket、point、poke、police、policy、political、pop、population、porch、port。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：neighboring。OALD 以 neighbouring 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/neighboring)。不计入完成数。
待复核：Olympic。OALD 无 Olympic 独立词条（仅 the Olympic Games），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/olympic)。不计入完成数。
待复核：percent。OALD 以 per cent 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/percent)。不计入完成数。

## 批次 077

完成 100 词：portfolio、position、pour、power、practice、prepare、present、presentation、prevention、price、privacy、product、production、productivity、professor、program、protocol、provided、psychological、public、purpose、purse、pursuit、put、quit、radio、rate、reading、reasonable、record、reference、refugee、regarding、region、regularly、related、relationship、removal、replacement、report、research、reservation、resign、response、restaurant、result、return、rice、road、rock、room、route、royal、rubber、rumour、Russia、sacrifice、safe、safety、salad、salary、sandwich、Saturday、sauce、saving、say、school、science、scientific、Scotland、script、seat、second、secretary、seminar、senior、sense、sentiment、September、series、service、set、settle、settlement、several、sex、sheep、ship、shop、shopping、short、shrug、side、sign、signal、silent、similar、simple、single、size。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：sales。OALD 无 sales 独立词条（为 sale 的复数及复合词），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/sales)。不计入完成数。

## 批次 078

完成 100 词：skiing、skill、skin、skirt、slam、sleep、slot、smoking、soak、soar、social、soil、somehow、sound、source、space、Spain、Spanish、speaker、special、speech、speed、spending、spit、spokesman、sport、stadium、stage、star、starter、statement、station、statute、steel、stone、store、story、strategic、street、student、study、stuff、style、subject、suck、suggestion、suicide、summary、summer、Sunday、supermarket、supply、support、surprise、swear、sweater、swimming、table、tactic、take、tea、teacher、teaching、technician、technique、technology、telephone、television、tennis、terms、test、text、textbook、theatre、theory、therapist、thinking、third、thousand、throat、throughout、Thursday、tighten、time、top、toss、total、tour、tourism、tourist、town、trade、traditional、train、training、transport、transportation、trauma、travel、treaty。雅思（i1）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：starting。OALD 无 starting 独立词条（为 start 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/starting)。不计入完成数。
待复核：States。OALD 无 States 独立词条（the States 见 state），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/states)。不计入完成数。

## 批次 079

完成 100 词：tree、tuck、Tuesday、tumour、TV、type、tyre、ugly、ultimately、uncomfortable、understanding、unemployment、united、unusual、update、useful、usual、valley、value、versus、video、view、village、visible、walking、wall、warm、waste、water、wave、wealth、web、website、Wednesday、weekend、weekly、weight、west、western、whatever、wheel、whip、wide、wilderness、wind、window、wing、wisdom、wise、wood、worker、working、workshop、world、writer、writing、yard、yellow、york、youth、zero、cheerful、chemist、chic、choir、cinema、circus、clarity、clash、clasp、cleaner、cleaning、clearance、cliche、cocktail、compartment、composite、contingency、contradiction、conversely、corrupt、cough、countryside、courtesy、cradle、credible、cricket、crown、crumb、cumulative、curl、curly、curse、customary、cycling、dash、deaf、dedicated、dedication、defiance。雅思（i1/i2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：boots。OALD 无 boots 独立词条（为 boot 的复数），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/boots)。不计入完成数。

## 批次 080

完成 100 词：despair、dial、dine、diploma、directory、disagreement、discrepancy、disguise、distraction、dividend、dome、dressing、dropout、dub、Easter、editorial、Egyptian、embargo、embark、embassy、emperor、empirical、ending、ensue、enthusiastic、envy、errand、exacerbate、expectancy、fabulous、farewell、farming、feast、federation、fellowship、fend、fetch、finite、flank、fling、flirt、flu、flutter、folder、forthcoming、foyer、freak、fridge、fry、fulfil、fuss、gamble、generic、geography、giggle、glow、gown、grammar、grate、gravel、grid、grill、grit、groan、growl、guardian、handling、havoc、hawk、heading、heap、heartbeat、heater、hedge、heroine、hobby、hop、hose、hospitality、hound、hum、hysterical、idle、imperial、inaccurate、incoming、indulge、inference、infinite、injection、inquire、instalment、insure、interim、interviewer、ivory、jagged、jam、junk、justification。雅思（i2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：enrollment。OALD 以 enrolment 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/enrollment)。不计入完成数。

## 批次 081

完成 100 词：kidney、kin、kindergarten、knit、knob、knot、lamb、lame、lapse、lender、lever、liable、lick、liner、liquor、loaf、locker、lounge、maid、making、malaria、Malaysia、manifest、mar、marginal、martial、martyr、masculine、massacre、meadow、mentality、mercy、mesh、metallic、microphone、mid、mileage、miles、mining、minus、mist、mobilize、module、molest、monarchy、morality、mosquito、motel、motorcycle、motto、mourn、multilateral、murmur、muster、namely、nap、nausea、nil、noble、notify、nuance、nuisance、nursery、nursing、nylon、oblivious、occupational、odour、offend、offset、ominous、optimism、organizer、orthodox、outlaw、outskirts、overhead、overhear、override、overtake、overthrow、oxide、pageant、pal、paradise、paralyse、parcel、parliament、partition、passport、pathetic、patriotism、pavement、pedal、pedestrian、periodically、perish、perpetual、petty、pharmaceutical。雅思（i2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：layoff。OALD 以 lay-off 立目，拼写变体待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/layoff)。不计入完成数。
待复核：marks。OALD 无 marks 独立词条（为 mark 的复数），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/marks)。不计入完成数。
待复核：mills。OALD 无 mills 独立词条（为 mill 的复数），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/mills)。不计入完成数。

## 批次 082

完成 100 词：pharmacy、phd、phenomenal、picnic、pier、pilgrim、planting、playground、plug、pointed、pragmatic、printing、probation、propaganda、prophecy、psychiatric、psychiatry、purity、qualitative、racket、railway、receipt、recite、recorder、referee、referendum、refrain、refusal、registration、rehearsal、resignation、restless、revenge、revolve、rig、ripple、rising、robber、safeguard、salute、scant、scotsman、seafood、seasoned、serial、setback、sewage、shave、shiver、simplify、sincere、singular、slack、slate、slaughter、sleepy、snack、snatch、sociology、sore、sprint、steering、stereo、straightforward、stressful、subcommittee、subjective、subscribe、succession、surroundings、suspension、swirl、sydney、tablet、taxation、taxi、tempo、temptation、territorial、thief、thrill、thriller、tick、tidy、timely、timetable、toast、token、torch、torture、trek、triple、trousers、turf、turning、turnover、twilight、underline、uneasy、uneven。雅思（i2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：printed。OALD 无 printed 独立词条（为 print 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/printed)。不计入完成数。
待复核：recycled。OALD 无 recycled 独立词条（为 recycle 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/recycled)。不计入完成数。
待复核：roommate。OALD 无 roommate 独立词条页，待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/roommate)。不计入完成数。
待复核：sleeping。OALD 无 sleeping 独立词条（为 sleep 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/sleeping)。不计入完成数。
待复核：traveling。OALD 以英式拼写 travelling 立目，美式拼写待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/traveling)。不计入完成数。

## 批次 083

完成 100 词：unhealthy、unilateral、unrest、usage、velvet、vengeance、verge、vice、vicious、videotape、visa、visualize、vocabulary、vomit、voucher、vow、waiter、waitress、warden、wardrobe、warming、washing、waterfall、wedge、wetland、whereby、whirl、whistle、wicked、width、withhold、worship、worthwhile、wrestle、yoga、zoo、Alaska、amends、childcare、coerce、cola、commonwealth、commotion、complexion、condolence、conducive、congruent、conqueror、cork、cot、coupon、coward、crease、crocodile、deadlock、dearth、decipher、deduce、deduct、deflate、delinquency、deluge、departmental、depletion、derelict、dilapidated、din、disable、disco、dispel、distil、dole、doubtless、downpour、drench、duly、elastic、elated、electrician、enrolment、envisage、evict、exceedingly、exhort、expend、expulsion、eyesight、fallacy、filth、flask、fluff、forestry、forfeit、gaudy、gaunt、geology、ghastly、glimmer、glitter、gloss。雅思（i2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：birds。OALD 无 birds 独立词条（为 bird 的复数形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/birds)。不计入完成数。
待复核：forbes。OALD 无 forbes 词条（专有名词），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/forbes)。不计入完成数。

## 批次 084

完成 100 词：guild、gymnasium、handbook、handout、headmaster、healthcare、henceforth、hereditary、hijack、hitchhike、hitherto、housekeeping、incline、increment、indelible、inertia、interviewee、invincible、invoice、isle、janitor、kangaroo、laden、landlady、lax、leaflet、lenient、loll、lubricate、lucid、ludicrous、madden、magistrate、magnate、maiden、maniac、Melbourne、memento、mercenary、metric、mildew、mire、miscarriage、mischief、misdeed、misrepresent、misuse、monologue、monsoon、monstrous、moustache、naught、nautical、necessitate、negation、negotiable、neurotic、nicety、nobility、nominal、nullify、nuts、oar、oasis、obedient、oblique、obnoxious、Odyssey、omen、onlooker、oppress、optic、oscillate、outcast、outdo、outstrip、ovation、overrule、overrun、overture、pacify、pamper、panorama、paranoia、paraphernalia、parody、pastime、paternity、pathos、payable、perceptible、persecute、pertain、perverse、pessimism、phobia、photocopy、physique、piecemeal、piety。雅思（i3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：irrespective。OALD 无 irrespective 独立词条（仅收短语 irrespective of），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/irrespective)。不计入完成数。
待复核：memorise。OALD 无 memorise 独立词条页（英式拼写，主词条为 memorize），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/memorise)。不计入完成数。

## 批次 085

完成 100 词：pimple、piracy、piston、placard、plaintive、planetarium、plankton、pointless、pompous、potion、pounce、precedence、precipice、predisposition、preface、prerogative、pretext、procure、prologue、prospectus、provisional、pseudonym、raincoat、rainwater、ramble、rave、recline、registrar、rejoice、remittance、remorse、rendezvous、repent、resilience、resonant、reticent、righteous、rivet、rouse、sabotage、safari、sailing、savage、scalpel、scold、scorn、scum、septic、shanty、shimmer、shoal、sightseeing、skating、slang、smelly、solvent、sparkle、sportsman、statesman、steamer、sterilize、steward、stoop、storehouse、subtitle、supersonic、surname、swerve、syllabus、symposium、syndicate、taboo、tar、telling、terse、tertiary、thirst、tinge、toil、tonic、tramp、transistor、treatise、trifle、truce、twinkle、unconditional、underwrite、undue、unreliable、untold、upkeep、urchin、utmost、vain、valuation、veterinarian、wager、watchdog、whilst。雅思（i3）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：rivers。OALD 无 rivers 独立词条（为 river 的复数形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rivers)。不计入完成数。
待复核：speaking。OALD 无 speaking 独立词条页（为 speak 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/speaking)。不计入完成数。
待复核：stairs。OALD 无 stairs 独立词条页（主词条为 stair），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/stairs)。不计入完成数。
待复核：touring。OALD 无 touring 独立词条页（为 tour 的变化形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/touring)。不计入完成数。
待复核：walls。OALD 无 walls 独立词条（为 wall 的复数形式），待复核 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/walls)。不计入完成数。

## 批次 086

完成 100 词：wording、wrench、wretched、yoke、close-up、cosy、defence、dictation、drop-off、drowse、drowsiness、eagle、eddy、eke、email、enquire、enquiry、entreat、excrement、existent、fastidious、favour、feet、fibre、first-aid、flyover、fortnight、full-time、gaily、gaol、granary、granular、gratuity、handball、harbour、hard-working、helpline、high-rise、humdrum、insipid、insolvent、invigilate、kelp、latest、leprosy、licence、loth、mackintosh、magnanimous、maltreat、manacle、matrimony、meagre、meteoric、microbiology、microfilm、mischance、misconceive、mould、mucous、natal、navigable、neurosis、notary、nought、oblong、offence、ohp、ostensible、ostentation、overwrought、Oxford、pacific、part-time、periscope、perplexity、petrol、phone-in、phonetic、photojournalism、plagiarize、plough、politic、postcode、postscript、preposition、psycholinguistics、reflectance、repatriate、reverent、sceptical、second-hand、self-discipline、shamble、situated、speciality、sportswear、sterling、storey、sulphur。雅思（i3/i4）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。



## 发布节奏

每批 100 词，累计 1000 词后统一推送 GitHub 和网站。本轮已在本地完成 500 词，距下次发布还差 500 词。发布基线为 9b6992bc91b23ec22ca1b43a94aaf02b42b5040c，当时两项均核对 7971 词；当前页面显示本地核对进度，不表示已上线。
