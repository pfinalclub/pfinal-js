<?php
//var_dump($_FILES);
// $fsize = $_POST['size'];
$findex =$_POST['index'];
$ftotal =$_POST['total'];
// $ftype = $_POST['type'];
$fdata = $_FILES['data'];
//var_dump($fdata);
$fname = mb_convert_encoding($_POST['name'],"gbk","utf-8");
//var_dump($fname)
// $truename = mb_convert_encoding($_POST['trueName'],"gbk","utf-8");
//var_dump($_POST);
$path = "./";
$dir = $path."source/";
$save = $dir.$fname;
if(!file_exists($dir))
{
     mkdir($dir,0777,true);
     chmod($dir,0777);
}

// // //读取临时文件内容
$temp = fopen($fdata["tmp_name"],"r+");
// //var_dump($temp);
$filedata = fread($temp,filesize($fdata["tmp_name"]));
// // //将分段内容存放到新建的临时文件里面
if(file_exists($dir."/".$findex.".tmp")) unlink($dir."/".$findex.".tmp");
$tempFile = fopen($dir."/".$findex.".tmp","w+");
fwrite($tempFile,$filedata);
fclose($tempFile);
fclose($temp);
    //循环读取临时文件并将其合并置入新文件里面
//if(file_exists($save)) @unlink($save);
for($i=1;$i<=$ftotal;$i++)
{
    $readData = @fopen($dir."/".$i.".tmp","r+");
    $writeData = @fread($readData,filesize($dir."/".$i.".tmp"));
    $newFile = @fopen($save,"a+");
    fwrite($newFile,$writeData);
    if($newFile) fclose($newFile);
    if($readData) fclose($readData);
    $resu = @unlink($dir."/".$i.".tmp"); 
}
$res = array("res"=>"success","url"=>mb_convert_encoding($save,'utf-8','gbk'));
echo json_encode($res);