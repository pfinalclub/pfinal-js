<?php

$fsize = $_POST['size'];
$findex =$_POST['indexCount'];
$ftotal =$_POST['totalCount'];
$ftype = $_POST['type'];
$fdata = $_FILES['file'];
$fname = mb_convert_encoding($_POST['name'],"gbk","utf-8");
$truename = mb_convert_encoding($_POST['trueName'],"gbk","utf-8");

$path = "../../";
$dir = $path."source/".$truename."-".$fsize;
$save = $dir."/".$fname;
if(!is_dir($dir))
{
    mkdir($dir);
    chmod($dir,0777);
}

//读取临时文件内容
$temp = fopen($fdata["tmp_name"],"r+");
$filedata = fread($temp,filesize($fdata["tmp_name"]));
//将分段内容存放到新建的临时文件里面
if(file_exists($dir."/".$findex.".tmp")) unlink($dir."/".$findex.".tmp");
$tempFile = fopen($dir."/".$findex.".tmp","w+");
fwrite($tempFile,$filedata);
fclose($tempFile);

fclose($temp);

if($findex+1==$ftotal)
{
    if(file_exists($save)) @unlink($save);
    //循环读取临时文件并将其合并置入新文件里面
    for($i=0;$i<$ftotal;$i++)
    {
        $readData = fopen($dir."/".$i.".tmp","r+");
        $writeData = fread($readData,filesize($dir."/".$i.".tmp"));

        $newFile = fopen($save,"a+");
        fwrite($newFile,$writeData);
        fclose($newFile);
        
        fclose($readData);

        $resu = @unlink($dir."/".$i.".tmp"); 
    }
    $res = array("res"=>"success","url"=>mb_convert_encoding($truename."-".$fsize."/".$fname,'utf-8','gbk'));
    echo json_encode($res);
}

?>