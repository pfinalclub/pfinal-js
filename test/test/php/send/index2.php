<?php
$path = "L:/programmer/ComsenzEXP/wwwroot/JQkaifa/HTML5Upload/";
$dir = $path."source";
$files = $_FILES["file"];
if(!is_dir($dir))
{
    mkdir($dir);
    chmod($dir,0777);
}

if(is_uploaded_file($files["tmp_name"]))
{
   $fName = $files["name"];
   $fType = $files["type"];
   $fSize = $files["size"]; 
   $tmp_name = $files["tmp_name"];
   
   $fName = $dir."/".$fName;
   $result = move_uploaded_file($tmp_name,mb_convert_encoding($fName,'gbk','utf-8'));
   if($result)
   echo "success";
   else
   echo "failed";
} else {
   echo "failed";
}

?>