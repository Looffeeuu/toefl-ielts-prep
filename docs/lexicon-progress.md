# 全库音标与释义核对进度

更新：2026-11-17。总计 9075 词。

| 项目 | 已核对 | 尚待核对 |
| --- | ---: | ---: |
| 释义与词性 | 1335 | 7740 |
| 英美音与主要分读 | 1345 | 7730 |
| 两项均完成 | 1326 | 7749 |

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

下一批队列前 30 词：ruins、fossil、fracture、framework、fresco、friction、frustrate、fundamental、fusion、galaxy、genre、glacier、gradual、gravity、habitat、habituation、hence、heritage、hibernate、hierarchy、hinder、humid、hypothesis、illustrate、immigrant、impede、implicit、improvise、incentive、indicate。

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

待复核：ruins。已找到 ruin 的释义与原形音标，尚未取得 ruins 自身完整英美 IPA，保留待核对。 [已查资料](https://dictionary.cambridge.org/dictionary/english/ruin)。不计入完成数。

## 发布节奏

每批 100 词，累计 1000 词后统一推送 GitHub 和网站。本轮已在本地完成 300 词，距下次发布还差 700 词。发布基线为 622b7ffac50f5c24b3ab3424a6faa53e3ba406d4，当时两项均核对 1026 词；当前页面显示本地核对进度，不表示已上线。
