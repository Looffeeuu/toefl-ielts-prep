# 全库音标与释义核对进度

更新：2026-11-25。总计 9075 词。

| 项目 | 已核对 | 尚待核对 |
| --- | ---: | ---: |
| 释义与词性 | 4384 | 4691 |
| 英美音与主要分读 | 4382 | 4693 |
| 两项均完成 | 4376 | 4699 |

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

下一批队列前 30 词：accidents、accommodations、account for、accountants、actions、activities、adults、advantages、advertisements、affairs、agencies、aggressiveness、animals、antibiotics、approaches、approaching、areas、articles、assignments、attacks、attempts、automated、beds、beginners、belts、benefits、bicycles、birds、booklist、books。

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

待复核：careerism。已查到 Collins 释义和美音，但尚未找到可照录的完整英美 IPA；保留待核对，不计入完成。 [已查资料](https://www.collinsdictionary.com/dictionary/english/careerism)。不计入完成数。

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

待复核：recount。OALD /definition/english/recount 及 recount_1 本次未取到词条页（该词有动词 /rɪˈkaʊnt/ 与重新计票 /ˌriːˈkaʊnt/ 等多个同形词条）；保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/recount)。不计入完成数。

## 批次 045

完成 100 词：rehearse、reign、reiterate、rejection、relaxation、relaxed、relay、relentless、relevance、reliance、relinquish、remainder、remarkably、remedy、remnant、renew、renewable、renewal、renovate、renovation、repertoire、repetition、replica、reproduction、reproductive、resemblance、resent、reshape、reside、residual、residue、resistant、resonance、respective、respiratory、responsive、restoration、restrain、restraint、restrictive、retrospect、retrospective、revise、revision、revival、revive、revolt、rhythmic、rigorous、rinse、ripe、rite、rivalry、roam、roar、roast、robust、rocky、rodent、rot、rotation、rotten、rounded、rubble、rugged、rumble、rustic、rusty、ruthless、saddle、saga、salient、salvage、sanctuary、sandy、sane、satisfactory、saturated、scar、scarcely、scenery、scenic、scholarly、scissors、scoop、scour、scout、scrap、scrape、scribble、scripture、scrub、scrutinize、sculptor、scurry、seam、seasonal、seasoning、seduce、seep。托福次高频（f2）队列 100 词，来源改用 OALD（剑桥网站对自动访问启用安全验证）。英音取 OALD 英式、美音取同页北美 IPA，逐字照录。

待复核：rigor。OALD /definition/english/rigor 无词条（以英式拼写 rigour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/rigour)。不计入完成数。
待复核：runoff。OALD /definition/english/runoff 无词条（以 run-off 立目）。保留待复核。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/run-off)。不计入完成数。
待复核：savor。OALD /definition/english/savor 无词条（以英式拼写 savour 立目）；暂列待复核，需增加拼写别名支持后处理。 [已查资料](https://www.oxfordlearnersdictionaries.com/definition/english/savour_1)。不计入完成数。

## 发布节奏

每批 100 词，累计 1000 词后统一推送 GitHub 和网站。本轮已在本地完成 200 词，距下次发布还差 800 词。发布基线为 237be0a9f85fc0b493092ad90e069a03e94a2898，当时两项均核对 4176 词；当前页面显示本地核对进度，不表示已上线。
