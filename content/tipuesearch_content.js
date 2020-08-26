var tipuesearch = {"pages": [{'title': 'About', 'text': '這裡是國立虎尾科技大學機械設計工程系大二的電腦輔助設計實習課程網頁. \n CAD2020 將在  https://kaggle.com ,  https://colab.research.google.com  以及可攜程式系統上編寫與  Flask  網際程式, 目的是利用  Onshape ,  NX 12,  Solidworks  2017 與  AutoDesk Inventor  2019 設計機電資整合系統所需的零組件後, 可結合  Flutter  手機程式與網際  Python Remote API  程式控制  CoppeliaSim  環境中的 虛擬系統 . \n 以下是 CAD2020 課程進行流程: \n W1 學員填寫基本資料 \n W1 告知將利用  Gitter  與  Discourse  進行課程議題討論 \n W1 就電腦軟硬體與網路環境的使用進行介紹 \n W2 學員建立  Github ,  Gitlab,   Heroku ,  Onshape  與  Authorea  帳號 \n Ｗ2 學員利用 Github Pages 與 CMSiMDE 建立個人網頁 \n W2 學員學習如何利用 Git 與 Github 維護個人網頁 \n Ｗ3 統整 W1 與 W2 教材內容至各學員個人網頁 \n Ｗ3 完成亂數分組,\xa0 每班分成四組 \n W4 - W6 Flask on Heroku 與 CoppeliaSim Remote API 程式編寫 \n W7-W9 建立  https://github.com/mdecourse/vrep-api-python  所需零組件 \n Ｗ10 - W14 分組電腦輔助設計專案 \n Ｗ15 - W18 分組總結報告 \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': '評分', 'text': '\'\'\'\n根據評分表單中的 自評分數, 互評得分, 教師評分, 計算學員課程成績\n\'\'\'\n \ndef diff(分數1, 分數2):\n    return abs(分數1 - 分數2)\n     \ndef getHigh(分數1, 分數2):\n    if  分數1 > 分數2:\n        return 分數1\n    else:\n        return 分數2\n\ndef getLow(分數1, 分數2):\n    if  分數1 < 分數2:\n        return 分數1\n    else:\n        return 分數2\n \ndef 分組評分(自評分數, 教師評分):\n    return getLow(自評分數, 教師評分)\n    if diff(自評分數, 教師評分) > 5:\n        return getLow(自評分數, 教師評分)\n    else:\n        return int(自評分數*0.4 + 教師評分*0.6)\n     \ndef 全班比分(互評得分, 分組評分):\n    if diff(互評得分, 分組評分) < 5:\n        學員成績 = getHigh(互評得分, 分組評分)\n    else:\n        學員成績 = int(互評得分*0.4 + 分組評分*0.6)\n    return 學員成績\n \ndef 學員成績(自評分數, 互評得分, 教師評分):\n    學員課程成績 = 全班比分(互評得分, 分組評分(自評分數, 教師評分))\n    return 學員課程成績\n    \nfor i in range(10):\n    self_score = 50 + i*5\n    for j in range(10):\n        peer_score = 50 + j*5\n        for k in range(10):\n            teacher_score = 50 + k*5\n            print(self_score, peer_score, teacher_score, "=", 學員成績(self_score, peer_score, teacher_score)) \n', 'tags': '', 'url': '評分.html'}, {'title': '討論區', 'text': 'https://gitter.im/mdecourse/cp2020  ', 'tags': '', 'url': '討論區.html'}, {'title': '分組', 'text': '修課人員名單: \n 四技二甲電腦輔助設計實習: \n https://nfulist.herokuapp.com/?semester=1091&courseno=0788 \n 四技二乙電腦輔助設計實習: \n https://nfulist.herokuapp.com/?semester=1091&courseno=0801  ', 'tags': '', 'url': '分組.html'}, {'title': 'CAD', 'text': 'Computer Aided Design 電腦輔助設計牽涉如何利用 計算機系統相關技術 (computer system related technology)，以協助產品的創建，修改，分析和最佳化. \n Product design creation 設計創建 \n Product design modification 設計修改 \n Product design analysis 設計分析 \n Product design optimization 設計最佳化 \n \n Integration of CAD, CAE and CAM through the database (1999, Principles of CAD/CAM/CAE Systems, KunWoo Lee \n', 'tags': '', 'url': 'CAD.html'}, {'title': '設計創建', 'text': '設計創建流程中的 2D/3D 繪圖, 其建構目的為何? 只是為了溝通表達? 還是有其他目的? \n 設計內容在溝通過程需不需要進行變更修改?設計內容如何修改?由誰修改? \n 設計內容由設計者親自修改與採用計算機程式修改, 有何不同? \n 設計內容一旦修改, 舊版本需要完整保存嗎?如何保存? \n 機械產品一旦發現瑕疵, 需要進行設計變更嗎?有聽過零件 recall 嗎? \n 現在的所謂產品, 只包含機械零件嗎?需要電子感測元件?需要電機驅動元件? \n 為何會產生所謂的客戶關係管理?這跟機械設計工程師有關嗎? \n 產品的規格與品質是原創件者說了算, 還是銷售櫃台的人員說了算? \n 在甚麼情況下, 消費者得以直接面對產品的原始創建者?網路? \n https://github.com/cyberbotics/webots \xa0為何要 open source? \n 從\xa0 https://cyberbotics.com/doc/guide/ \xa0的內容創建, 你看到甚麼? \n 提示:\xa0 https://github.com/cyberbotics/webots/tree/master/docs/guide \n 何謂 Markdown? \n 為何 Webots 的技術手冊要採用 Markdown 格式編寫? \n 為何 Webots 的技術手冊要部署到 Github Pages? \n', 'tags': '', 'url': '設計創建.html'}, {'title': 'Onshape', 'text': 'https://www.onshape.com/ \n Onshape 入門書 \n https://cad.onshape.com/help/Content/Primer/onshape_primer.htm \n Reference \n https://github.com/mdecourse/V-Rep \n https://mdekmol.github.io/cd2019a-task1-2019cda_t1_g1/ \n https://github.com/scrum-1/scrum_cadp_final/issues \n https://github.com/mdecourse/cadp2018/issues/17 \n https://405232491.gitbooks.io/gitbook_week3/content/week10.html \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Solidworks', 'text': '下載 Solidworks 2017 安裝檔案 \n Mastering SolidWorks \n https://link.springer.com/book/10.1007/978-3-030-38901-7 \n', 'tags': '', 'url': 'Solidworks.html'}, {'title': 'Inventor', 'text': 'AutoDesk Inventor 安裝教學 \n Learn Autodesk Inventor 2018 Basics \n https://link.springer.com/book/10.1007/978-1-4842-3225-5 \n', 'tags': '', 'url': 'Inventor.html'}, {'title': 'NX', 'text': '下載 NX 12 可攜版本 \n NX 12 for advanced users - in a nutshell (德文版) \n https://link.springer.com/book/10.1007/978-3-658-24773-7 \n', 'tags': '', 'url': 'NX.html'}, {'title': '設計修改', 'text': '產品設計在何種情況下需要修改? \n 由誰修改? \n 如何修改? \n 修改後的新舊版本內容如何保存? \n 如何完整擷取各階段修改前後的版本資料? \n 存在個人筆記本或電腦上的資料能夠永續保存嗎? \n 寫入藍光碟? \n 每一個版本修改細節如何進行註記? \n 假如涉及修改設計內容的人員多達數十人?數百人?甚至更多? \n \xa0某一產品推出後已經銷售一定數量, 若部分零件因瑕疵修改, 需要全數 recall 還是等故障才回廠維修?假如設計變更零件屬於功能提升, 是否新舊零件都需維護一定數量的備品? \n Onshape 與 SolidWorks 就本質上有何不同? \n 有聽過產品生命週期管理嗎?為何產品需要設定生命週期? \n 某一型的電腦訂出保固五年的意思是什麼? \n 五年內產品一定不會故障? \n 五年內若產品故障, 可以保證修好?一定負責提供所需備料? \n 一台汽柴油車若其生命週期為 20 年, 原廠如何預估各種維修備品的數量?如何定價? \n 聽過 aftermarket spare parts 嗎?\xa0 https://www.swag.de/ \n \n', 'tags': '', 'url': '設計修改.html'}, {'title': '設計分析', 'text': 'https://github.com/mdecourse/half-car \xa0 \n half-car_dynamic-analysis.pdf \n Issues: \n 為何需要進行 dynamic analysis? \n 如何進行 dynamic analysis? \n 如何整理 dynamic analysis 結果? \n 如何呈現 dynamic analysis 結果? \n 電腦輔助設計 \n 產品設計只需要奮力畫出最終產品的 3D 零組件即可?各零件的尺寸由誰決定? \n 何謂電腦輔助參數設計?Parametric design?設計為何需要用參數表示零件尺寸? \n 參數設計流程中的參數若其數量高達數百個, 且在設計製造或與客戶溝通過程需要滿足特定約束條件而不斷修改, 此一流程採人工修改好?或者能夠利用計算機程式流程修改? \n 電腦輔助工程分析 \n Apple 設計手機過程需要進行工程分析嗎? \n 電腦輔助製造 \n Apple 為何不自己製造手機?', 'tags': '', 'url': '設計分析.html'}, {'title': '設計最佳化', 'text': '', 'tags': '', 'url': '設計最佳化.html'}, {'title': 'Solvespace', 'text': 'Geometric Constraint Solver: \n http://adventures.michaelfbryan.com/posts/constraints-part-1-expressions/ \n http://adventures.michaelfbryan.com/posts/constraints-part-1-expressions/ \n https://github.com/mdecourse/protractr \n https://github.com/rgov/shape_solver \n https://github.com/rgov/shape_solver \n sketchflat-internals.pdf \n Parametric Dimension: \n https://github.com/mdecourse/solvespace-w-var-dimension \xa0 \n Reference \n https://github.com/KmolYuan/Pyslvs-UI', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Project', 'text': '各班分為四組, 每一組所完成的 虛擬機電資系統 所屬零組件, 必須分別利用  Onshape ,  NX 12 與  Solidworks  2017 建立後, 轉檔進入  CoppeliaSim  虛擬環境中, 並以部署在  Heroku  中的網際  Python Remote API  程式與  Flutter  手機程式進行控制. \n 各分組的  CoppeliaSim  系統模擬可在電腦輔助設計室中執行, 或以工作站室中每班配置的兩台 Ubuntu 20.04 主機中執行. \n 技術分組 \n \n 建立 機電資系統零組件 , 轉為  STL  格式後進入  CoppeliaSim  虛擬環境 \n 在  CoppeliaSim  環境中按照系統運動與動力特性進行組立並模擬 \n \xa0建立  Python Remote API  近端程式, 用於控制  CoppeliaSim  機電零組件 \n 將  Python Remote API  轉為  Flask  網際程式, 並部署於  Heroku \n 利用  Flutter  建立手機 APP, 送出網際訊號與  Heroku  上的 Remote API 互動 \n 各組員利用  Authorea  編寫個人與分組的 pdf 格式期末報告 \n \n Reference \n https://github.com/AtsushiSakai/PythonRobotics  ', 'tags': '', 'url': 'Project.html'}, {'title': 'Robot', 'text': 'Robot Adventures in Python and C.pdf \n https://robotbenchmark.net/ \n', 'tags': '', 'url': 'Robot.html'}, {'title': 'PyRep', 'text': 'https://github.com/mdecourse/site-40623128 \n https://github.com/mdecourse/site-40623130 \n https://github.com/mdecourse/site-40623224 \n https://github.com/mdecourse/vrep-volleyball \n https://github.com/mdecourse/V-REP-YouBot-Demo \n https://github.com/mdecourse/PyRep \n https://github.com/mdecourse/vrep-api-python \n https://github.com/doctorsrn/gym_vrep \n https://github.com/mdecourse/gym-vrep \n https://github.com/mdecourse/VREPQuadcopter', 'tags': '', 'url': 'PyRep.html'}, {'title': 'Web', 'text': '', 'tags': '', 'url': 'Web.html'}, {'title': 'Flutter-Flask', 'text': 'https://github.com/mdecourse/Flutter-Flask-Login \n', 'tags': '', 'url': 'Flutter-Flask.html'}, {'title': 'Machine Learning', 'text': 'https://github.com/mdecourse/pyrobolearn \n https://github.com/mdecourse/visual-pushing-grasping \n https://github.com/jhu-lcsr/good_robot \n', 'tags': '', 'url': 'Machine Learning.html'}, {'title': 'Pytorch', 'text': 'https://www.kaggle.com/krishanudb/pytorch-tutorial-for-beginners \n https://www.kaggle.com/crilancelo/pytorch-in-kaggle \n https://www.kaggle.com/frtgnn/introduction-to-pytorch-a-very-gentle-start \n', 'tags': '', 'url': 'Pytorch.html'}, {'title': 'Keras', 'text': 'Deep Learning Projects Using TensorFlow 2 \n https://link.springer.com/book/10.1007/978-1-4842-5802-6 \xa0 \n \n', 'tags': '', 'url': 'Keras.html'}]};